import {Injectable} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SectionFormGroup} from "../interfaces/section-form-group";

@Injectable({
  providedIn: 'root'
})
export class SectionsStateService {
  private readonly sections: Map<SectionFormGroup, string[]>;

  constructor(private builder: FormBuilder) {
    this.sections = new Map();
  }

  private createSection(): SectionFormGroup {
    return this.builder.group({
      name: this.builder.control(''),
      description: this.builder.control(''),
    }) as SectionFormGroup;
  }

  private getLastSection(): SectionFormGroup {
    return Array.from(this.sections.keys())[this.sections.size - 1];
  }

  addSection(itemId: string) {
    const match = Array.from(this.sections.entries()).find(([section, items]) => items.includes(itemId) && section);
    if (match) {
      const [parentSection, parentItems] = match;
      const itemIndex = parentItems.indexOf(itemId);
      this.sections.set(this.createSection(), parentItems.slice(itemIndex));
      this.sections.set(parentSection, parentItems.slice(0, itemIndex));
    }
  }

  getSection(itemId: string): SectionFormGroup | undefined {
    return Array.from(this.sections.keys()).find((section) => this.sections.get(section)?.includes(itemId));
  }

  isSectionLeader(itemId: string) {
    return Array.from(this.sections.values()).find((value) => value[0] === itemId);
  }

  getLength() {
    return this.sections.size;
  }

  initialize(itemId: string) {
    this.sections.set(this.createSection(), [itemId]);
  }

  update(itemId: string) {
    const section = this.getLastSection();
    this.sections.set(section, this.sections.get(section)?.concat(itemId) || [itemId]);
  }
}
