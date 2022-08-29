import { createRouter, createWebHistory } from 'vue-router';
import { I18n } from '../middleware/i18n';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: `/${I18n.fallback}/`,
    },
    {
      path: '/:locale/',
      children: [
        {
          path: '',
          component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue'),
        },
      ],
    },
  ],
});

router.beforeEach(async (to, _, next) => {
  const paramsLocale = to.params.locale as string;

  // use locale if paramsLocale is not in SUPPORT_LOCALES
  if (!I18n.supportLocales.includes(paramsLocale)) {
    return next(`/${I18n.fallback}`);
  }

  // load locale messages
  if (!I18n.i18n.global.availableLocales.includes(paramsLocale)) {
    await I18n.loadLocaleMessages(paramsLocale);
  }

  // set i18n language
  I18n.setI18nLanguage(paramsLocale);

  return next();
});

export default router;
