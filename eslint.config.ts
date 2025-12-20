import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import pluginVitest from '@vitest/eslint-plugin';
import pluginPlaywright from 'eslint-plugin-playwright';
import vueEslintConfigPrettier from '@vue/eslint-config-prettier';

export default defineConfigWithVueTs([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/results/**', '**/playwright.config.ts']),
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.strict,
  vueTsConfigs.stylisticTypeChecked,
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*']
  },
  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{e2e-spec}.ts']
  },
  {
    rules: {
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'generic',
          readonly: 'generic'
        }
      ],
      '@typescript-eslint/no-deprecated': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'vue/attribute-hyphenation': 'off',
      'vue/attributes-order': 'off',
      'vue/define-emits-declaration': 'error',
      'vue/define-props-declaration': 'error',
      'vue/v-on-event-hyphenation': 'off',
      'vue/multi-word-component-names': 'off'
    }
  },
  vueEslintConfigPrettier
]);
