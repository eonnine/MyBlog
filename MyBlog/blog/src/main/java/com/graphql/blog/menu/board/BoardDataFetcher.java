package com.graphql.blog.menu.board;

import java.util.Optional;

import com.graphql.blog.util.annotation.Gql;
import com.graphql.blog.util.annotation.GqlDataFetcher;
import com.graphql.blog.util.annotation.GqlType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Component;

import graphql.schema.DataFetcher;

@Gql
@Component
public class BoardDataFetcher {

  @Autowired 
  BoardRepository boardRepository;

  // 전체 목록 호출, 페이징을 위해 
  @GqlDataFetcher(type=GqlType.QUERY)
  public DataFetcher<?> getBoardList () {
    return enviroment -> {
      int pageIndex = enviroment.getArgument("index");
      /**
      * 조회할 페이지 번호, 한 페이지에 보여줄 개수, 정렬 순서, 정렬할 기준 컬럼을 인자로 하여 
      * Pageable 객체를 생성합니다.
      */
      Pageable pageable = PageRequest.of(pageIndex, 5, Direction.DESC, "id");
      return boardRepository.findAll(pageable);
    };
  }

  // 게시글 단건 조회
  @GqlDataFetcher(type=GqlType.QUERY)
  public DataFetcher<?> getBoard () {
    return enviroment -> {
      int id = enviroment.getArgument("id");
      return boardRepository.findById(id);
    };
  }

  // 게시글 신규 생성
  @GqlDataFetcher(type=GqlType.MUTATION)
  public DataFetcher<?> postBoard () {
    return environment -> {
      BoardEntity entity = new BoardEntity();
      entity.update(environment.getArguments());
      return boardRepository.save(entity);
    };
  }

  // 게시글 수정
  @GqlDataFetcher(type=GqlType.MUTATION)
  public DataFetcher<?> patchBoard () {
    return environment -> {
      Optional<BoardEntity> optional = boardRepository.findById(environment.getArgument("id"));
      BoardEntity entity = optional.get();
      return entity.update(environment.getArguments());
    };
  }

}