let mongoose    = require('mongoose');
let bcrypt      = require('bcrypt');

const SALT_WORK_FACTOR = 10;

let usersSchema = mongoose.Schema({

	firstName: { type: String },
	lastName: { type: String },
	login: { type: String },
	password: { type: String }
});

//pre save the date for each entry
usersSchema.pre('save', function(next) {
	var user = this;

	// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();

	// generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		 if (err) return next(err);

		 // hash the password using our new salt
		 bcrypt.hash(user.password, salt, function(err, hash) {
			  if (err) return next(err);

			  // override the cleartext password with the hashed one
			  user.password = hash;
			  next();
		 });
	});
});

usersSchema.methods.comparePassword = function(candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function(err, res) {
		 return cb(res);
	});
};

module.exports = mongoose.model('Users', usersSchema);