module.exports = function (name) {
	return (name.replace(/(\.)+/, '-')).replace(/(\d+[\-\.])+/, '');
};
