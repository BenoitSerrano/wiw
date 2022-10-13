import { AppDataSource } from "../../data-source"
import { Gift } from "../../models"

export { giftService }

const giftService = {
    fetchAll,
    createOne
}

function fetchAll() {
    const giftRepository = AppDataSource.getRepository(Gift)
    return giftRepository.find();
}

async function createOne(webLink: string) {
    const giftRepository = AppDataSource.getRepository(Gift)
    const gift = new Gift()
    gift.webLink = webLink

    await giftRepository.save(gift)
}