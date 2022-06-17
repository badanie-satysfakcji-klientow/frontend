import {Injectable} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {SectionFormGroup} from "../interfaces/section-form-group";

@Injectable({
  providedIn: 'root'
})
export class SectionsStateService {
  private readonly sections: Map<SectionFormGroup, string[]>;
  private pristine: boolean;

  constructor(private builder: FormBuilder) {
    this.sections = new Map();
    this.pristine = true;
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

  private initializeState(itemId: string) {
    this.sections.set(this.createSection(), [itemId]);
  }

  private updateState(itemId: string) {
    const section = this.getLastSection();
    this.sections.set(section, this.sections.get(section)?.concat(itemId) || [itemId]);
  }

  private getContainingEntry(itemId: string) {
    return Array.from(this.sections.entries()).find(([section, items]) => items.includes(itemId) && section);
  }

  getSections() {
    return Array.from(this.sections.entries());
  }

  checkPristine(): boolean {
    return this.pristine;
  }

  setDirty() {
    this.pristine = false;
  }

  addSection(itemId: string) {
    const match = this.getContainingEntry(itemId);
    if (match) {
      const [parentSection, parentItems] = match;
      const itemIndex = parentItems.indexOf(itemId);
      this.sections.set(this.createSection(), parentItems.slice(itemIndex));
      this.sections.set(parentSection, parentItems.slice(0, itemIndex));
    }
  }

  removeSection(itemId: string, precedingItemId: string) {
    const match = this.getContainingEntry(itemId);
    if (match) {
      const [source, sourceItems] = match;
      const targetMatch = this.getContainingEntry(precedingItemId);
      if (targetMatch) {
        const [target, targetItems] = targetMatch;
        this.sections.set(target, targetItems.concat(sourceItems));
      }
      this.sections.delete(source);
    }
  }

  getSection(itemId: string): SectionFormGroup | undefined {
    return Array.from(this.sections.keys()).find((section) => this.sections.get(section)?.includes(itemId));
  }

  isSectionLeader(itemId: string) {
    return Array.from(this.sections.values()).find((value) => value[0] === itemId);
  }

  registerItem(itemId: string) {
    this.sections.size ? this.updateState(itemId) : this.initializeState(itemId);
  }

  deregisterItem(itemId: string) {
    const items = Array.from(this.sections.values()).find((items) => items.includes(itemId));
    items?.splice(items.indexOf(itemId), 1);
    if (!items?.length) {
      this.removeSection(itemId, '');
    }
  }

  clearSections() {
    this.sections.clear();
    this.pristine = true;
  }
}
