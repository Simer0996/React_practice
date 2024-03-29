//Schema for the mock data in the database documented on Swagger documentation route

/**
 * @openapi
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      required:
 *        - id
 *        - productName
 *        - productOwnerName
 *        - Developers
 *        - scrumMasterName
 *        - startDate
 *        - methodology
 *      properties:
 *        id:
 *          type: string
 *          default: 1
 *        productName:
 *          type: string
 *          default: product 1
 *        productOwnerName:
 *          type: string
 *          default: product owner 1
 *        Developers:
 *          type: array
 *          default: [developer 1, developer 2]
 *        scrumMasterName:
 *          type: string
 *          default: scrum master 1
 *        startDate:
 *          type: string
 *          default: 2022/08/12
 *        methodology:
 *          type: string
 *          default: Agile
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *        productName:
 *          type: string
 *        productOwnerName:
 *          type: string
 *        Developers:
 *          type: array
 *        scrumMasterName:
 *          type: string
 *        startDate:
 *          type: string
 *        methodology:
 *          type: string
 */

//Custom mock data for the database
const data = [
    {
        id: "1",
        productName: "Prototype1",
        productOwnerName: "Leo",
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }, {
        id: "2",
        productName: "prototype1291",
        productOwnerName: "Leo",
        scrumMasterName: "Emma",
        startDate: "2022/08/12",
        methodology: "Agile",
    }
]

module.exports = data

