import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import ProgressBar from 'primevue/progressbar';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("Card", Card);
    nuxtApp.vueApp.component("Tag", Tag);
    nuxtApp.vueApp.component("ProgressBar", ProgressBar);
});