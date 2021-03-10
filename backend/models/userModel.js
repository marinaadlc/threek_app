import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        defaut: false
    }
}, {
    timestamp: true
})

const User = mongoose.model('User', userSchema)

export default User