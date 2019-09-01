package com.graphql.blog.sample;

import com.graphql.blog.util.annotation.Gql;
import com.graphql.blog.util.annotation.GqlDataFetcher;
import com.graphql.blog.util.annotation.GqlType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import graphql.schema.DataFetcher;

@Gql
@Component
public class CityDataFetcher  {
  
  @Autowired
  private CityRepository cityRepository;

  @GqlDataFetcher(type=GqlType.QUERY)
  public DataFetcher<?> allCities () {
    return environment -> {
      return cityRepository.findAll();
    };
  }

  @GqlDataFetcher(type=GqlType.QUERY)
  public DataFetcher<?> city () {
    return environment -> {
      int id = environment.getArgument("id");
      return cityRepository.findById(id);
    };
  }

}