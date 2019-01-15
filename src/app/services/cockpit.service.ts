import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as marked from 'marked';
import { AppSettings } from '../utils/constants';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class CockpitService {
  constructor(private apollo: Apollo) {}

  listCategories() {
    return this.apollo
      .query({
        query: gql`
          query {
            categories {
              _id,
              title,
              subtitle,
              description,
              cover {
                _id,
                url,
                name
              }
            }
          }
        `
      });
  }

  getCategory(id: string) {
    return this.apollo
      .query({
        variables: {
          category: id
        },
        query: gql`
          query category($category: ID!) {
            category(id: $category) {
              _id,
              title,
              subtitle,
              description,
              cover {
                _id,
                url,
              },
              articles {
                _id,
                title,
                cover {
                  name,
                  url
                }
                # content,
                # gallery {
                #   _id,
                #   name,
                #   url
                # }
              }
            }
          }
        `
      });
  }

  getArticles() {
    return this.apollo
      .query({
        query: gql`
          articles {
            _id,
            title,
            content
          }
        `
      });
  }

  getArticle(id: string) {
    return this.apollo
      .query({
        variables: {
          article: id
        },
        query: gql`
          query article($article: ID!) {
            article(id: $article) {
              _id,
              title,
              subtitle,
              cover {
                _id,
                name,
                url
              },
              content,
              gallery {
                _id,
                name,
                url
              }
            }
          }
        `
      });
  }

  getAllPages() {
    return this.apollo
      .query({
        query: gql`
        query pages {
          pages {
            slug,
            title,
            content,
            cover {
              name,
              url
            },
          }
        }`
      });
  }

  getAllFaqs() {
    return this.apollo
      .query({
        query: gql`
        query faqs {
          faqs {
            question,
            answer,
            link,
            updatedAt
          }
        }
        `
      });
  }

  getAllTestimonials() {
    return this.apollo
      .query({
        query: gql`
        query testimonials {
          testimonials {
            subject,
            author,
            content,
            source,
            org
          }
        }
        `
      });
  }

  markdownToHtml(md: string) {
    return marked(md);
  }
}
