import http from "../http-common";

class DistilleryDataService {
    getAll() {
	return http.get("/distilleries");
    }

    get(id) {
	return http.get(`/distilleries/${id}`);
    }

    findByNumber(number) {
	return http.get(`/distilleries?number=${number}`);
    }

    getWhiskies() {
	return http.get("/whiskies");
    }

    getWhisky(id) {
	return http.get(`/whiskies?number=${id}`);
    }
}

export default new DistilleryDataService();
