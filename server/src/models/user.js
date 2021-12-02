const mongoose = require('mongoose');

class User {
    constructor() {
        const UserSchema = new mongoose.Schema({
            username: {
                type: String,
                unique: true,
            },
            email: {
                type: String,
                unique: true,
            },
            verified: {
                type: Boolean,
                default: false,
            },
            isAdmin: {
                type: Boolean,
                default: false,
            },
            firstName: String,
            lastName: String,
            displayName: String,
            country: String,
            city: String,
            password: String,
            gender: { type: String, enum: ['male', 'female', 'non-binary'] },
            bio: String,
            aboutMe: String,
            birthday: Date,
            genres: [String],
            profilePhoto: String,
            coverPhoto: String,
        }, { timestamps: true });

        this.model = mongoose.model('Users', UserSchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = User;
