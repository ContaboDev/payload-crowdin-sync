/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    categories: Category;
    'multi-rich-text': MultiRichText;
    'localized-posts': LocalizedPost;
    media: Media;
    'nested-field-collection': NestedFieldCollection;
    policies: Policy;
    posts: Post;
    'localized-posts-with-condition': LocalizedPostsWithCondition;
    tags: Tag;
    users: User;
    'crowdin-files': CrowdinFile;
    'crowdin-collection-directories': CrowdinCollectionDirectory;
    'crowdin-article-directories': CrowdinArticleDirectory;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    'multi-rich-text': MultiRichTextSelect<false> | MultiRichTextSelect<true>;
    'localized-posts': LocalizedPostsSelect<false> | LocalizedPostsSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'nested-field-collection': NestedFieldCollectionSelect<false> | NestedFieldCollectionSelect<true>;
    policies: PoliciesSelect<false> | PoliciesSelect<true>;
    posts: PostsSelect<false> | PostsSelect<true>;
    'localized-posts-with-condition': LocalizedPostsWithConditionSelect<false> | LocalizedPostsWithConditionSelect<true>;
    tags: TagsSelect<false> | TagsSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'crowdin-files': CrowdinFilesSelect<false> | CrowdinFilesSelect<true>;
    'crowdin-collection-directories': CrowdinCollectionDirectoriesSelect<false> | CrowdinCollectionDirectoriesSelect<true>;
    'crowdin-article-directories': CrowdinArticleDirectoriesSelect<false> | CrowdinArticleDirectoriesSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'localized-nav': LocalizedNav;
    nav: Nav;
    statistics: Statistic;
  };
  globalsSelect: {
    'localized-nav': LocalizedNavSelect<false> | LocalizedNavSelect<true>;
    nav: NavSelect<false> | NavSelect<true>;
    statistics: StatisticsSelect<false> | StatisticsSelect<true>;
  };
  locale: 'en' | 'de_DE' | 'fr_FR';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  name?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "multi-rich-text".
 */
export interface MultiRichText {
  id: string;
  field_0?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  field_1?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  field_2?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  field_3?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  field_4?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  field_5?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  field_6?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  field_7?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  field_8?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  field_9?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  field_10?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  /**
   * Sync translations for this locale from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncTranslations?: boolean | null;
  /**
   * Sync all translations from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncAllTranslations?: boolean | null;
  crowdinArticleDirectory?: (string | null) | CrowdinArticleDirectory;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "crowdin-article-directories".
 */
export interface CrowdinArticleDirectory {
  id: string;
  /**
   * Select locales to exclude from translation synchronization.
   */
  excludeLocales?: ('de_DE' | 'fr_FR')[] | null;
  name?: string | null;
  crowdinCollectionDirectory?: (string | null) | CrowdinCollectionDirectory;
  crowdinFiles?: (string | CrowdinFile)[] | null;
  parent?: (string | null) | CrowdinArticleDirectory;
  reference?: {
    createdAt?: string | null;
    updatedAt?: string | null;
    projectId?: number | null;
  };
  originalId?: number | null;
  directoryId?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "crowdin-collection-directories".
 */
export interface CrowdinCollectionDirectory {
  id: string;
  name?: string | null;
  title?: string | null;
  collectionSlug?: string | null;
  reference?: {
    createdAt?: string | null;
    updatedAt?: string | null;
    projectId?: number | null;
  };
  originalId?: number | null;
  directoryId?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "crowdin-files".
 */
export interface CrowdinFile {
  id: string;
  title?: string | null;
  field?: string | null;
  crowdinArticleDirectory?: (string | null) | CrowdinArticleDirectory;
  reference?: {
    createdAt?: string | null;
    updatedAt?: string | null;
    projectId?: number | null;
  };
  originalId?: number | null;
  directoryId?: number | null;
  revisionId?: number | null;
  name?: string | null;
  type?: ('json' | 'html') | null;
  path?: string | null;
  /**
   * The file data submitted to the Crowdin API
   */
  fileData?: {
    json?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    html?: string | null;
    /**
     * Copy Lexical field blocks as a translation source enabling a convenient method of merging block content on translation (i.e. merge non-translated fields like type=select).
     */
    sourceBlocks?:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts".
 */
export interface LocalizedPost {
  id: string;
  title?: string | null;
  author?: (string | null) | User;
  publishedDate?: string | null;
  category?: (string | null) | Category;
  tags?: (string | Tag)[] | null;
  content?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  status?: ('draft' | 'published') | null;
  /**
   * Sync translations for this locale from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncTranslations?: boolean | null;
  /**
   * Sync all translations from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncAllTranslations?: boolean | null;
  crowdinArticleDirectory?: (string | null) | CrowdinArticleDirectory;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: string;
  name?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nested-field-collection".
 */
export interface NestedFieldCollection {
  id: string;
  title?: string | null;
  textField?: string | null;
  richTextField?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  textareaField?: string | null;
  arrayField?:
    | {
        textField?: string | null;
        richTextField?:
          | {
              [k: string]: unknown;
            }[]
          | null;
        textareaField?: string | null;
        id?: string | null;
      }[]
    | null;
  layout?:
    | (
        | {
            textField?: string | null;
            richTextField?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            textareaField?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'basicBlock';
          }
        | {
            textField?: string | null;
            richTextField?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            textareaField?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'basicBlockNonLocalized';
          }
        | {
            richTextField?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'basicBlockRichText';
          }
        | {
            textField?: string | null;
            richTextField?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            textareaField?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'basicBlockMixed';
          }
        | {
            title?: string | null;
            messages?:
              | {
                  title?: string | null;
                  message?:
                    | {
                        [k: string]: unknown;
                      }[]
                    | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'testBlockArrayOfRichText';
          }
      )[]
    | null;
  group?: {
    textField?: string | null;
    richTextField?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    textareaField?: string | null;
  };
  tabOneTitle?: string | null;
  tabOneContent?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  items?:
    | {
        heading?: string | null;
        block?:
          | {
              content?: {
                root: {
                  type: string;
                  children: {
                    type: string;
                    version: number;
                    [k: string]: unknown;
                  }[];
                  direction: ('ltr' | 'rtl') | null;
                  format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                  indent: number;
                  version: number;
                };
                [k: string]: unknown;
              } | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'basicBlockLexical';
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  tabTwo?: {
    tabTwoTitle?: string | null;
    tabTwoContent?:
      | {
          [k: string]: unknown;
        }[]
      | null;
  };
  /**
   * Sync translations for this locale from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncTranslations?: boolean | null;
  /**
   * Sync all translations from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncAllTranslations?: boolean | null;
  crowdinArticleDirectory?: (string | null) | CrowdinArticleDirectory;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "policies".
 */
export interface Policy {
  id: string;
  title?: string | null;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  group?: {
    array?:
      | {
          title?: string | null;
          content?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ('ltr' | 'rtl') | null;
              format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          id?: string | null;
        }[]
      | null;
  };
  /**
   * Sync translations for this locale from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncTranslations?: boolean | null;
  /**
   * Sync all translations from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncAllTranslations?: boolean | null;
  crowdinArticleDirectory?: (string | null) | CrowdinArticleDirectory;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  title?: string | null;
  author?: (string | null) | User;
  publishedDate?: string | null;
  category?: (string | null) | Category;
  tags?: (string | Tag)[] | null;
  content?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  status?: ('draft' | 'published') | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts-with-condition".
 */
export interface LocalizedPostsWithCondition {
  id: string;
  title?: string | null;
  translateWithCrowdin?: boolean | null;
  author?: (string | null) | User;
  publishedDate?: string | null;
  category?: (string | null) | Category;
  tags?: (string | Tag)[] | null;
  content?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  status?: ('draft' | 'published') | null;
  /**
   * Sync translations for this locale from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncTranslations?: boolean | null;
  /**
   * Sync all translations from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncAllTranslations?: boolean | null;
  crowdinArticleDirectory?: (string | null) | CrowdinArticleDirectory;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'categories';
        value: string | Category;
      } | null)
    | ({
        relationTo: 'multi-rich-text';
        value: string | MultiRichText;
      } | null)
    | ({
        relationTo: 'localized-posts';
        value: string | LocalizedPost;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'nested-field-collection';
        value: string | NestedFieldCollection;
      } | null)
    | ({
        relationTo: 'policies';
        value: string | Policy;
      } | null)
    | ({
        relationTo: 'posts';
        value: string | Post;
      } | null)
    | ({
        relationTo: 'localized-posts-with-condition';
        value: string | LocalizedPostsWithCondition;
      } | null)
    | ({
        relationTo: 'tags';
        value: string | Tag;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'crowdin-files';
        value: string | CrowdinFile;
      } | null)
    | ({
        relationTo: 'crowdin-collection-directories';
        value: string | CrowdinCollectionDirectory;
      } | null)
    | ({
        relationTo: 'crowdin-article-directories';
        value: string | CrowdinArticleDirectory;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  name?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "multi-rich-text_select".
 */
export interface MultiRichTextSelect<T extends boolean = true> {
  field_0?: T;
  field_1?: T;
  field_2?: T;
  field_3?: T;
  field_4?: T;
  field_5?: T;
  field_6?: T;
  field_7?: T;
  field_8?: T;
  field_9?: T;
  field_10?: T;
  syncTranslations?: T;
  syncAllTranslations?: T;
  crowdinArticleDirectory?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts_select".
 */
export interface LocalizedPostsSelect<T extends boolean = true> {
  title?: T;
  author?: T;
  publishedDate?: T;
  category?: T;
  tags?: T;
  content?: T;
  status?: T;
  syncTranslations?: T;
  syncAllTranslations?: T;
  crowdinArticleDirectory?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        card?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        tablet?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nested-field-collection_select".
 */
export interface NestedFieldCollectionSelect<T extends boolean = true> {
  title?: T;
  textField?: T;
  richTextField?: T;
  textareaField?: T;
  arrayField?:
    | T
    | {
        textField?: T;
        richTextField?: T;
        textareaField?: T;
        id?: T;
      };
  layout?:
    | T
    | {
        basicBlock?:
          | T
          | {
              textField?: T;
              richTextField?: T;
              textareaField?: T;
              id?: T;
              blockName?: T;
            };
        basicBlockNonLocalized?:
          | T
          | {
              textField?: T;
              richTextField?: T;
              textareaField?: T;
              id?: T;
              blockName?: T;
            };
        basicBlockRichText?:
          | T
          | {
              richTextField?: T;
              id?: T;
              blockName?: T;
            };
        basicBlockMixed?:
          | T
          | {
              textField?: T;
              richTextField?: T;
              textareaField?: T;
              id?: T;
              blockName?: T;
            };
        testBlockArrayOfRichText?:
          | T
          | {
              title?: T;
              messages?:
                | T
                | {
                    title?: T;
                    message?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  group?:
    | T
    | {
        textField?: T;
        richTextField?: T;
        textareaField?: T;
      };
  tabOneTitle?: T;
  tabOneContent?: T;
  items?:
    | T
    | {
        heading?: T;
        block?:
          | T
          | {
              basicBlockLexical?:
                | T
                | {
                    content?: T;
                    id?: T;
                    blockName?: T;
                  };
            };
        id?: T;
      };
  tabTwo?:
    | T
    | {
        tabTwoTitle?: T;
        tabTwoContent?: T;
      };
  syncTranslations?: T;
  syncAllTranslations?: T;
  crowdinArticleDirectory?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "policies_select".
 */
export interface PoliciesSelect<T extends boolean = true> {
  title?: T;
  content?: T;
  group?:
    | T
    | {
        array?:
          | T
          | {
              title?: T;
              content?: T;
              id?: T;
            };
      };
  syncTranslations?: T;
  syncAllTranslations?: T;
  crowdinArticleDirectory?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts_select".
 */
export interface PostsSelect<T extends boolean = true> {
  title?: T;
  author?: T;
  publishedDate?: T;
  category?: T;
  tags?: T;
  content?: T;
  status?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts-with-condition_select".
 */
export interface LocalizedPostsWithConditionSelect<T extends boolean = true> {
  title?: T;
  translateWithCrowdin?: T;
  author?: T;
  publishedDate?: T;
  category?: T;
  tags?: T;
  content?: T;
  status?: T;
  syncTranslations?: T;
  syncAllTranslations?: T;
  crowdinArticleDirectory?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags_select".
 */
export interface TagsSelect<T extends boolean = true> {
  name?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "crowdin-files_select".
 */
export interface CrowdinFilesSelect<T extends boolean = true> {
  title?: T;
  field?: T;
  crowdinArticleDirectory?: T;
  reference?:
    | T
    | {
        createdAt?: T;
        updatedAt?: T;
        projectId?: T;
      };
  originalId?: T;
  directoryId?: T;
  revisionId?: T;
  name?: T;
  type?: T;
  path?: T;
  fileData?:
    | T
    | {
        json?: T;
        html?: T;
        sourceBlocks?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "crowdin-collection-directories_select".
 */
export interface CrowdinCollectionDirectoriesSelect<T extends boolean = true> {
  name?: T;
  title?: T;
  collectionSlug?: T;
  reference?:
    | T
    | {
        createdAt?: T;
        updatedAt?: T;
        projectId?: T;
      };
  originalId?: T;
  directoryId?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "crowdin-article-directories_select".
 */
export interface CrowdinArticleDirectoriesSelect<T extends boolean = true> {
  excludeLocales?: T;
  name?: T;
  crowdinCollectionDirectory?: T;
  crowdinFiles?: T;
  parent?: T;
  reference?:
    | T
    | {
        createdAt?: T;
        updatedAt?: T;
        projectId?: T;
      };
  originalId?: T;
  directoryId?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-nav".
 */
export interface LocalizedNav {
  id: string;
  items: {
    label?: string | null;
    id?: string | null;
  }[];
  /**
   * Sync translations for this locale from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncTranslations?: boolean | null;
  /**
   * Sync all translations from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncAllTranslations?: boolean | null;
  crowdinArticleDirectory?: (string | null) | CrowdinArticleDirectory;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nav".
 */
export interface Nav {
  id: string;
  items: {
    label?: string | null;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "statistics".
 */
export interface Statistic {
  id: string;
  users?: {
    text?: string | null;
    /**
     * Restricted to multiples of 100 in order to simplify localization.
     */
    number?: number | null;
  };
  countries?: {
    text?: string | null;
    number?: number | null;
  };
  /**
   * Sync translations for this locale from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncTranslations?: boolean | null;
  /**
   * Sync all translations from Crowdin on save draft (stores translations as drafts) or publish (publishes translations).
   */
  syncAllTranslations?: boolean | null;
  crowdinArticleDirectory?: (string | null) | CrowdinArticleDirectory;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-nav_select".
 */
export interface LocalizedNavSelect<T extends boolean = true> {
  items?:
    | T
    | {
        label?: T;
        id?: T;
      };
  syncTranslations?: T;
  syncAllTranslations?: T;
  crowdinArticleDirectory?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nav_select".
 */
export interface NavSelect<T extends boolean = true> {
  items?:
    | T
    | {
        label?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "statistics_select".
 */
export interface StatisticsSelect<T extends boolean = true> {
  users?:
    | T
    | {
        text?: T;
        number?: T;
      };
  countries?:
    | T
    | {
        text?: T;
        number?: T;
      };
  syncTranslations?: T;
  syncAllTranslations?: T;
  crowdinArticleDirectory?: T;
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}