import { Integration, Prisma } from "@prisma/client";


export interface IntegrationsRepository {
  create(data: Prisma.IntegrationUncheckedCreateInput): Promise<Integration>;
  delete(id: string): Promise<void>;
  findByUserId(id: string, name: string): Promise<Integration | null>;
}