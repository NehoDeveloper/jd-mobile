export default {
	goto (value) {
		this.$router.push(value);
	},
	back () {
		this.$router.go(-1);
	}
}