import { Prisma, PrismaClient, PrismaPromise } from '@prisma/client'

export const prisma : PrismaClient = new PrismaClient()

export class SampleRepo {

    static async createAllData() {
        const landLordCount = await prisma.landLord.count();
        if(landLordCount < 1){

                const createLandLord1 = await prisma.landLord.create({
                    data: {
                            mobileNo: '9665423242111', 
                            name: 'Mohammad',
                            property : {
                                create : [
                                    { size:'500', type: 'Apartment'},
                                ]
                            }
                }
                })

                const createLandLord2 = await prisma.landLord.create({
                    data: {
                            mobileNo: '966536493382', 
                            name: 'Sara',
                            property : {
                                create : [
                                    { size:'587', type: 'Condominium'}
                                ]
                            }
                }
                })
    }
}
}