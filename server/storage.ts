export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export interface IStorage {
  createContactSubmission(data: Omit<ContactSubmission, 'id' | 'createdAt'>): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemoryStorage implements IStorage {
  private contactSubmissions: ContactSubmission[] = [];
  private nextId = 1;

  async createContactSubmission(data: Omit<ContactSubmission, 'id' | 'createdAt'>): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      id: String(this.nextId++),
      ...data,
      createdAt: new Date(),
    };
    this.contactSubmissions.push(submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return [...this.contactSubmissions];
  }
}

export const storage = new MemoryStorage();
