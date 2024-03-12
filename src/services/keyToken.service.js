"use strict";

class KeyTokenService {
	static createKeyToken = async ({ user, publicKey }) => {
		try {
			/**
			 * tại sao phải chuyển về toString, vì thuật toán rsa sẽ trả về là buffer nền phải convert về string mới có thể save db
			 */
			const publicKeyString = publicKey.toString();
		} catch (error) {
			return error;
		}
	};
}

module.exports = KeyTokenService;
