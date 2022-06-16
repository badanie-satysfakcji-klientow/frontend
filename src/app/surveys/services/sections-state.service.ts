import {Injectable} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";
import {SectionFormGroup} from "../interfaces/section-form-group";

@Injectable({
  providedIn: 'root'
})
export class SectionsStateService {
  private readonly sections: FormArray;
  private readonly identifiers: Map<SectionFormGroup, string[]>;

  constructor(private builder: FormBuilder) {
    this.sections = this.builder.array([]);
    this.identifiers = new Map();
  }

  private createSection(): SectionFormGroup {
    return this.builder.group({
      name: this.builder.control(''),
      description: this.builder.control(''),
    }) as SectionFormGroup;
  }

  private getLastSection(): SectionFormGroup {
    return this.sections.at(this.sections.length - 1) as SectionFormGroup;
  }

  addSection(itemId: string) {
    const match = [...this.identifiers.entries()].find(([section, items]) => items.includes(itemId) && section);
    if (match) {
      const [parentSection, parentItems] = match;
      const itemIndex = parentItems.indexOf(itemId);
      const tmp = this.createSection();
      this.sections.push(tmp);
      this.identifiers.set(tmp, parentItems.slice(itemIndex));
      this.identifiers.set(parentSection, parentItems.slice(0, itemIndex));
    }
  }

  getSection(itemId: string): SectionFormGroup | undefined {
    const section = this.sections.controls.find((section) =>
      this.identifiers.get(section as SectionFormGroup)?.includes(itemId)
    );
    return section ? (section as SectionFormGroup) : section;
  }

  isSectionLeader(itemId:string){
    return [...this.identifiers.values()].find((value) => value.includes(itemId) && value[0] === itemId)
  }

  getLength() {
    return this.sections.length;
  }

  initialize(itemId: string) {
    const section = this.createSection();
    this.sections.push(section);
    this.identifiers.set(section, [itemId]);
  }

  update(itemId: string) {
    const key = this.getLastSection();
    const value = this.identifiers.get(key);
    this.identifiers.set(key, value ? value.concat(itemId) : [itemId]);
  }
}
