/**
 * @file Setup MarkdownPlugins
 */

import VitePressDemo from 'markdown-it-vitepress-demo'
import type { MarkdownRenderer } from 'vitepress'

export function mdPlugins(md: MarkdownRenderer) {
  /**
   * @see {@link https://github.com/hairyf/markdown-it-vitepress-demo}
   */
  md.use(VitePressDemo)
}
