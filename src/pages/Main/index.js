import React, { Component } from 'react';
import { FaPlus, FaGithubAlt, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import {
  Form,
  SubmitButton,
  List,
  DetailsButton,
  ClearButton,
  RemoveButton,
} from './styles';
import Container from '../../components/Container';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    if (!newRepo) {
      this.setState({ loading: false });
      return;
    }

    try {
      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
      });
    } catch (err) {
      toast.error('Repo not found', { autoClose: 2000 });
      this.setState({
        repositories: [...repositories],
        newRepo: '',
        loading: false,
      });
    }
  };

  handleClear = () => {
    localStorage.clear();

    this.setState({
      repositories: [],
    });
  };

  handleRemove = repository => {
    const { repositories } = this.state;
    const filteredArray = repositories.filter(arrayItem => {
      return arrayItem !== repository;
    });
    this.setState({ repositories: [...filteredArray] });
    localStorage.setItem('repositories', JSON.stringify(repositories));
  };

  render() {
    const { newRepo, loading, repositories } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositories
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add repository"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <div>
                <DetailsButton>
                  <a
                    href={`/repository/${encodeURIComponent(repository.name)}`}
                  >
                    Details
                  </a>
                </DetailsButton>
                <RemoveButton
                  onClick={() => {
                    this.handleRemove(repository);
                  }}
                >
                  Remove
                </RemoveButton>
              </div>
            </li>
          ))}
        </List>
        <ClearButton onClick={this.handleClear}>Clear List</ClearButton>
      </Container>
    );
  }
}
