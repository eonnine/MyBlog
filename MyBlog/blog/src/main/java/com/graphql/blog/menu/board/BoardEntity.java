package com.graphql.blog.menu.board;

import java.util.Date;
import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Getter;

@Getter
@Entity
@Table(name="Board")
public class BoardEntity {

  // IDENTITY: 기본 키 생성을 DB에 위임합니다.
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int id;

  @Column(length = 30, nullable = false)
  private String title;

  @Column(length = 500, nullable = false)
  private String content;

  @Column(nullable = false)
  private boolean isPublic;

  private int visitCount;

  // 일자 형식으로 사용합니다.
  @Temporal(TemporalType.DATE)
  private Date postDate;

  @Temporal(TemporalType.DATE)
  private Date updateDate;

  // 처음 호출될 때 postDate, updateDate를 현재 날짜로 초기화합니다.
  @PrePersist
  protected void onCreate() {
    this.postDate = new Date();
    this.updateDate = new Date();
  }

  // 데이터 저장 및 수정을 할 때 사용할 메서드
  public BoardEntity update (Map<String, Object> map) {
    this.title = String.valueOf(map.get("title"));
    this.content = String.valueOf(map.get("content"));
    this.isPublic = (boolean)map.get("isPublic");
    return this;
  }

  // 조회수 증가 메서드
  public BoardEntity setVisitCount (int visitCount) {
    this.visitCount = visitCount;
    return this;
  }

}