const openai = require('../config/openai')

module.exports = {
    async sendText(req, res){
        const openaiAPI = openai.configuration()

        try {
            const response = await openaiAPI.createCompletion(
            openai.textCompletion('me de nomes de artigos para node.js')
            )
            
            return res.status(200).json({
                success: true,
                data: response.data.choices[0]
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                error: error.response ? error.response :
                "There was in issue on the server"
            })
        }
    }
}