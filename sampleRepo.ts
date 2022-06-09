import { Prisma, PrismaClient, PrismaPromise } from '@prisma/client'

export const prisma : PrismaClient = new PrismaClient()

export class SampleRepo {

    static async createAllData() {
        const landLordCount = await prisma.landLord.count();

        if(landLordCount < 1){

                const createManyLandLords = await prisma.landLord.createMany({
                    data: [
                        { mobileNo: '9665423242111', name: 'Mohammad'},
                        { mobileNo: '9665430982340', name: 'Noura'},
                    ]
                })
    }
}
}