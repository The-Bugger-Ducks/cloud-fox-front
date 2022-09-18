import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 16rem;
  padding: 3rem;
  height: 100vh;
  overflow-y: scroll;
`

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
  font-size: ${({ theme }) => theme.fontSizes.title};
  margin-bottom: 2rem;
`

export const ProfileContainer = styled.div`
  padding: 1px;
  margin-bottom: 2rem;

  border-radius: 20px;
  background: linear-gradient(259.89deg, #7711bb 6.85%, #ee7733 99.96%);
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  border-radius: 19px;
  padding: 2rem;

  background: ${({ theme }) => theme.colors.white};
`

export const ProfileInformations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Avatar = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  margin-bottom: 1.5rem;
`

export const UserName = styled.p`
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.semi_bold};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`

export const UserEmail = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`

export const DeleteIcon = styled.div`
  cursor: pointer;
`

export const Topic = styled.h2`
  margin-bottom: 1.5rem;

  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`

export const LevelCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const LevelCard = styled.div`
  width: 17.5rem;
  height: 12rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ImageCard = styled.img`
  height: 3.5rem;
`

export const TitleCard = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 14px;
`

export const SubtitleCard = styled.h2`
  margin-bottom: 1.5rem;

  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 14px;
  text-align: center;
`
