import { WorkTimes } from "@/@types/work-times";
import { WorkTimeRepository } from "../work-time-repository";
import { prisma } from "@/lib/prisma";


export class PrismaWorkTimeRepository implements WorkTimeRepository {
  async getSquadSellersWorkTime(squad_id: string) {
    const work_time = await prisma.workTimes.findMany({
      where: {
        squad_id,
      }
    })

    return work_time as WorkTimes.WorkTime[]
  }

  async getSellerWorkTime(id: string): Promise<WorkTimes.IncludeUser> {
    const work_time = await prisma.workTimes.findUnique({
      where: {
        id,
      },
      include: {
        user: true
      }
    })

    return work_time
  }

  async addSquadWorkTimeToSeller(squad_id: string, seller_id: string, weekly_hours: WorkTimes.weekly_hours) {
    await prisma.workTimes.create({
      data: {
        user_id: seller_id,
        squad_id,
        weekly_hours,
      }
    })

  }

}