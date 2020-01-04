import { VueConstructor } from "vue";
import { NotificationProgrammatic as Notification } from "buefy/dist/components/notification";
import { NotificationConfig } from "buefy/types/components";

class Test {
  constructor(Vue: VueConstructor) {
    Notification.open({
      message: "test message",
      type: "is-success"
    } as NotificationConfig);
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $test: Test;
  }
}

export default {
  install(Vue: VueConstructor, options: any) {
    Vue.prototype.$test = new Test(Vue);
  }
};
