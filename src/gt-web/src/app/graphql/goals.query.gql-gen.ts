import * as Types from '../../src/app/types/gql-types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GoalsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GoalsQuery = { __typename?: 'Query', goals: Array<{ __typename?: 'Goal', name: string }> };

export const GoalsDocument = gql`
    query Goals {
  goals {
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GoalsGQL extends Apollo.Query<GoalsQuery, GoalsQueryVariables> {
    document = GoalsDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
