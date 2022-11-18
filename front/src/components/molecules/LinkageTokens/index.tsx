// Recoil
import { useState, useEffect } from 'react';
import { linkageTokenState } from 'recoil/atoms/auth/linkageToken';
import { useRecoilValue, useSetRecoilState } from 'recoil';

// HOOKS
import { usePostLinkageTokenHandler } from 'hooks/auth';
import { useGetTokens } from 'hooks/auth';
import { useGetGitlabRepositories } from 'hooks/widget';
import { useGetJiraProjectList } from 'hooks/issue';
import { usePostConnectTokenToProject } from 'hooks/project';

// STYLE
import { StyledMarginY, StyledFlexRowEnd, StyledFlexAround, StyledPadding } from './style';
import { theme } from 'styles/theme';

// MOLECULES
import InputBox from 'components/molecules/InputBox';

// ATOMS
import Sheet from 'components/atoms/Sheet';
import Button from 'components/atoms/Button';
import Select from 'components/atoms/Select';
import Option from 'components/atoms/Option';
import Notification from 'components/atoms/Notification';

import { useGetUserInfoHandler } from 'hooks/user';

interface propsType {
  projectId: number | undefined;
}

interface jiraProjectType {
  key: string;
  name: string;
}

interface gitLabRepositoryType {
  id: number;
  description: string;
  name: string;
  name_with_namespace: string;
  path: string;
  path_with_namespace: string;
  default_branch: string;
  ssh_rul_to_repo: string | null;
  http_url_to_repo: string;
  web_url: string;
}

const index = ({ projectId }: propsType) => {
  // 현재 유저에게 연동된 토큰이 있는가 조회
  const [isJiraToken, setJiraToken] = useState(false);
  const [isGitLabToken, setGitLabToken] = useState(false);

  // 연동된 토큰이 있는 경우, 유저의 토큰 값을 저장
  const [jiraTokenValue, setjiraTokenValue] = useState('');
  const [gitLabTokenValue, setGitLabTokenValue] = useState('');
  // 연동된 토크인 있는 경우, 유저의 토큰 이메일 값을 저장
  const [getJiraEmail, setJiraEmail] = useState('');

  // 토큰 연동시 필요한 데이터를 업데이트 및 불러오기 위한 리코일 작업
  const { jiraToken } = useRecoilValue(linkageTokenState);
  const { jiraEmail } = useRecoilValue(linkageTokenState);
  const { gitLabToken } = useRecoilValue(linkageTokenState);

  const jiraSetRecoilState = useSetRecoilState(linkageTokenState);
  const jiraEmailSetRecoilState = useSetRecoilState(linkageTokenState);
  const gitLabSetRecoilState = useSetRecoilState(linkageTokenState);

  // react-query
  // 토큰 이미 가지고 있는지 확인
  const getTokens = useGetTokens();
  // 토큰 연동
  const linkageToken = usePostLinkageTokenHandler();
  // 지라 프로젝트 모두 가져오기
  const jiraProjectList = useGetJiraProjectList();
  // 깃 리포지토리 모두 가져오기
  const getGitLabRepositories = useGetGitlabRepositories('ssafygitlab');
  // 토큰 함수에 필요한 유저데이터
  const getUserInfo = useGetUserInfoHandler();
  // 토큰과 생성된 프로젝트 연결
  const connectTokenToProject = usePostConnectTokenToProject();

  // 유저가 프로젝트를 바꿀 때 마다 Option값 저장
  const [getJiraProject, setJiraProject] = useState('');
  const [getGitLabRepository, setGitLabRepository] = useState('');

  useEffect(() => {
    // 토큰이 있다면 연동하기로
    if (getTokens.isSuccess && getTokens.data.length > 0) {
      for (const item of getTokens.data) {
        if (item.tokenCodeId === 'JIRA') {
          console.log(item);
          setJiraToken(true);
          setjiraTokenValue(item.value);
          setJiraEmail(item.email);
        }
        if (item.tokenCodeId === 'SSAFYGITLAB') {
          console.log(item);
          setGitLabToken(true);
          setGitLabTokenValue(item.value);
        }
      }
    }
    if (linkageToken.isSuccess || (isJiraToken && jiraTokenValue)) {
      jiraProjectList.refetch();
    }
    if (linkageToken.isSuccess || (isGitLabToken && gitLabTokenValue)) {
      getGitLabRepositories.refetch();
    }
    if (jiraProjectList.data) {
      setJiraProject(jiraProjectList.data[0].name);
    }
    if (getGitLabRepositories.data) {
      setGitLabRepository(getGitLabRepositories.data[0].name);
    }
  }, [
    linkageToken.isSuccess,
    isJiraToken,
    jiraTokenValue,
    jiraProjectList.data,
    getTokens.isSuccess,
  ]);

  // 가지고 온 지라 프로젝트 Option 컴포넌트의 props 형태에 맞게 필터링
  const filteringJiraProjectHandler = (datas: jiraProjectType[]) => {
    const temp: string[] = [];
    for (const data of datas) temp.push(data.name);
    return temp;
  };

  // 가지고 온 지라 프로젝트 Option 컴포넌트의 props 형태에 맞게 필터링
  const filteringGitRepositoryHandler = (datas: gitLabRepositoryType[]) => {
    const temp: string[] = [];
    for (const data of datas) temp.push(`${data.id}-${data.name}`);
    return temp;
  };

  // 버튼 입력 클릭 시 지라 토큰 연동 및 해당 지라 프로젝트 가져오기
  const linkageJiraTokenHandler = () => {
    if (isJiraToken) {
      jiraProjectList.refetch();
    } else {
      if (getUserInfo.data) {
        linkageToken.mutate({
          email: jiraEmail,
          tokenCodeId: 'JIRA',
          value: jiraToken,
        });
      }
    }
  };

  // 버튼 입력 클릭 시 지라 토큰 연동 및 해당 깃 리포지토리 가져오기
  const linkageGitLabTokenHandler = () => {
    if (isGitLabToken) {
      getGitLabRepositories.refetch();
    } else {
      if (getUserInfo.data) {
        linkageToken.mutate({
          tokenCodeId: 'SSAFYGITLAB',
          value: gitLabToken,
        });
      }
    }
  };

  // 프로젝트 생성 후 지라 토큰을 통해 지라 프로젝트와 연동
  const connectTokenToProjectHandler = () => {
    if (projectId && jiraToken) {
      connectTokenToProject.mutate({
        detail: getJiraProject,
        name: 'JIRA',
        projectId,
      });
    }
    if (projectId && gitLabToken) {
      connectTokenToProject.mutate({
        detail: getGitLabRepository.split('-')[0],
        name: 'SSAFYGITLAB',
        projectId,
      });
    }
  };

  return (
    <>
      {connectTokenToProject.isSuccess && (
        <Notification
          width="300px"
          check={true}
          message={'프로젝트끼리 서로 연동되었습니다'}
        ></Notification>
      )}
      <StyledPadding>
        <Sheet width="100%" height="25vh" minHeight="400px" maxWidth="2000px">
          <StyledFlexAround>
            <StyledMarginY>
              <InputBox
                labelName="Jira 토큰"
                labelSize="1.3rem"
                labelMarginBottom="20px"
                isRow={false}
                containerWidth="100%"
                useSetRecoilState={jiraSetRecoilState}
                recoilParam={'jiraToken'}
                inputValue={isJiraToken ? jiraTokenValue : ''}
              ></InputBox>
              <InputBox
                labelName="Jira 이메일"
                labelSize="1.3rem"
                labelMarginBottom="20px"
                isRow={false}
                containerWidth="100%"
                useSetRecoilState={jiraEmailSetRecoilState}
                recoilParam={'jiraEmail'}
                inputValue={isJiraToken ? getJiraEmail : ''}
              ></InputBox>
              <StyledMarginY>
                <StyledFlexRowEnd>
                  <Button
                    width="100px"
                    borderColor={theme.button.gray}
                    backgroundColor={theme.button.green}
                    isHover={true}
                    clickHandler={linkageJiraTokenHandler}
                  >
                    입력
                  </Button>
                </StyledFlexRowEnd>
              </StyledMarginY>
              {jiraProjectList.data && (
                <>
                  <StyledMarginY>
                    <Select width="100%" setState={setJiraProject}>
                      <Option messages={filteringJiraProjectHandler(jiraProjectList.data)}></Option>
                    </Select>
                  </StyledMarginY>
                  <StyledFlexRowEnd>
                    <Button
                      width="150px"
                      borderColor={theme.button.gray}
                      backgroundColor={theme.button.green}
                      isHover={true}
                      clickHandler={connectTokenToProjectHandler}
                    >
                      프로젝트와 연동
                    </Button>
                  </StyledFlexRowEnd>
                </>
              )}
              {jiraProjectList.isError && (
                <Notification
                  width="200px"
                  check={false}
                  message={jiraProjectList.error.message}
                ></Notification>
              )}
            </StyledMarginY>
            <StyledMarginY>
              <InputBox
                labelName="GitLab 토큰"
                labelSize="1.3rem"
                labelMarginBottom="20px"
                isRow={false}
                useSetRecoilState={gitLabSetRecoilState}
                recoilParam={'gitLabToken'}
                inputValue={isGitLabToken ? gitLabTokenValue : ''}
              ></InputBox>
              <StyledMarginY>
                <StyledFlexRowEnd>
                  <Button
                    width="100px"
                    borderColor={theme.button.gray}
                    backgroundColor={theme.button.green}
                    isHover={true}
                    clickHandler={linkageGitLabTokenHandler}
                  >
                    입력
                  </Button>
                </StyledFlexRowEnd>
              </StyledMarginY>
              {getGitLabRepositories.data && (
                <>
                  <StyledMarginY>
                    <Select width="100%" setState={setGitLabRepository}>
                      <Option
                        messages={filteringGitRepositoryHandler(getGitLabRepositories.data)}
                      ></Option>
                    </Select>
                  </StyledMarginY>
                  <StyledFlexRowEnd>
                    <Button
                      width="150px"
                      borderColor={theme.button.gray}
                      backgroundColor={theme.button.green}
                      isHover={true}
                      clickHandler={connectTokenToProjectHandler}
                    >
                      프로젝트와 연동
                    </Button>
                  </StyledFlexRowEnd>
                </>
              )}
            </StyledMarginY>
          </StyledFlexAround>
        </Sheet>
      </StyledPadding>
    </>
  );
};

export default index;
