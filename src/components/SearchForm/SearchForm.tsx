import React, {useCallback, useEffect, useState} from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import { useAPI } from "../../contexts/apiContext";
import { useSpinner } from "../../contexts/isTypingContext";
import { debounce } from "../../utils/debounce";
import { usersCount } from "../../constants/constants";

export const SearchForm: React.FC = () => {
  const {users, setUsers} = useAPI()
  const {setIsTyping} = useSpinner()
  const [isSaved, setIsSaved] = useState(false)
  const [fullUserList, setFullUserList] : any = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  if (!isSaved && users?.length === usersCount) {
    setFullUserList([...users])
    setIsSaved(true)
  }

  useEffect(() => {
    searchUsers()
  }, [searchTerm])

  const changeSearchFor = debounce(setSearchTerm, 1000)
  const handleChange = useCallback(changeSearchFor, [])

  const handleEnterKeyPressed = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      searchUsers()
    }
  };

  const searchUsers = () => {
    if (searchTerm) {
      const newUserList = fullUserList.filter((user: any) => {
        return Object.values(user.name).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      })
      setUsers(newUserList)
    } else {
      setUsers(fullUserList)
    }
    setIsTyping(false)
  }

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">🔎</InputGroup.Text>
      <FormControl
        placeholder="Find a person"
        onKeyPress={handleEnterKeyPressed}
        onChange={(event) => {
          handleChange(event.target.value)
          setIsTyping(true)
        }}
      />
    </InputGroup>
  );
};
