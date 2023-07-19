import styled from 'styled-components';
import React, { useState } from 'react';
import shortid from 'shortid';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addComment, deleteComment, editComment, getComments } from '../axios/comments';
import { useParams } from 'react-router-dom';

const Comments = () => {
  const { id } = useParams();
  const [commentName, setCommentName] = useState('');
  const [commentTitle, setCommentTitle] = useState('');
  const [editId, setEditId] = useState(null);
  const [editedCommentName, setEditedCommentName] = useState('');
  const [editedCommentTitle, setEditedCommentTitle] = useState('');

  const onChangeCommentNameHandler = (event) => {
    setCommentName(event.target.value);
  };
  const onChangeCommentTitleHandler = (event) => {
    setCommentTitle(event.target.value);
  };
  const onChangeEditCommentNameHandler = (event) => {
    setEditedCommentName(event.target.value);
  };
  const onChangeEditCommentTitleHandler = (event) => {
    setEditedCommentTitle(event.target.value);
  };

  // Comments 조회
  const { data: comments } = useQuery('comments', getComments);
  const filterdComments = comments?.filter((comment) => comment.id === id);

  // Comment 추가
  const queryClient = useQueryClient();
  const addMutation = useMutation(addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    }
  });
  const addButtonHandler = () => {
    // 입력값 검사
    if (!commentName || !commentTitle) {
      alert('작성자와 내용을 입력해주세요.');
      return;
    }

    const newComment = {
      id: shortid(),
      id: id,
      name: commentName,
      title: commentTitle
    };
    addMutation.mutate(newComment);

    // 입력값 초기화
    setCommentName('');
    setCommentTitle('');
  };

  // Comment 삭제
  const deleteMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    }
  });
  const deleteButtonHandler = (id) => {
    alert('삭제하시겠습니까?');
    deleteMutation.mutate(id);
  };

  // Comment 수정
  const editMutation = useMutation(editComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    }
  });
  const editButtonHandler = (comment) => {
    setEditId(comment.id);
    if (!editId) {
      setEditedCommentName(comment.name);
      setEditedCommentTitle(comment.title);
    } else {
      const editedComment = {
        id: comment.id,
        name: editedCommentName,
        title: editedCommentTitle
      };
      editMutation.mutate(editedComment);
      setEditId(null);
    }
  };

  return (
    <>
      <div>해당 시설의 후기를 작성해 주세요</div>
      <div>
        <input placeholder={'작성자'} value={commentName} onChange={onChangeCommentNameHandler} />
        <input placeholder={'내용'} value={commentTitle} onChange={onChangeCommentTitleHandler} />
        <button onClick={addButtonHandler}>댓글 추가</button>
      </div>
      {filterdComments?.map((comment) => (
        <div key={comment.id}>
          {comment.id === editId ? (
            <input value={editedCommentName} onChange={onChangeEditCommentNameHandler} />
          ) : (
            <span>{comment.name}</span>
          )}
          {comment.id === editId ? (
            <input value={editedCommentTitle} onChange={onChangeEditCommentTitleHandler} />
          ) : (
            <span>{comment.title}</span>
          )}
          <button onClick={() => deleteButtonHandler(comment.id)}>삭제</button>
          <button onClick={() => editButtonHandler(comment)}>{comment.id === editId ? '저장' : '수정'}</button>
        </div>
      ))}
    </>
  );
};

export default Comments;
