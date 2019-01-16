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
              slug,
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
              slug,
              cover {
                _id,
                url,
              },
              articles {
                _id,
                title,
                slug,
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
            content,
            slug,
          }
        `
      });
  }

  getArticle(slug: string) {
    return this.apollo
      .query({
        variables: {
          slug: slug
        },
        query: gql`
          query articles($slug: String) {
            articles (where: {slug: $slug}) {
              _id,
              title,
              subtitle,
              slug,
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
            createdAt,
            updatedAt
          }
        }`
      });
  }

  getPage(slug: string) {
    return this.apollo
      .query({
        variables: {
          slug: slug
        },
        query: gql`
          query pages ($slug: String) {
            pages (where: { slug: $slug }) {
              slug,
              title,
              content,
              cover {
                name,
                url,
              },
              createdAt,
              updatedAt
            }
          }
        `
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

  getAllClients() {
    return this.apollo
      .query({
        query: gql`
        query clients {
          clients {
            title,
            logo {
              name,
              url
            },
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
