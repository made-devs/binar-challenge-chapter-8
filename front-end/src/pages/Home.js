import { Table, Container, Input, Button, Form, FormGroup } from "reactstrap";
function Home() {
  return (
    <div>
      <Container>
        <h2>Home</h2>
        <Form>
          <FormGroup>
            <Input name="username" placeholder="Username" type="text" />
          </FormGroup>
          <FormGroup>
            <Input name="email" placeholder="Email" type="text" />
          </FormGroup>
          <FormGroup>
            <Input name="exp" placeholder="Experience" type="text" />
          </FormGroup>
          <FormGroup>
            <Input name="lvl" placeholder="Level" type="text" />
          </FormGroup>
          <Button type="submit">Search</Button>
        </Form>
      </Container>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Experience</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>69</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>69</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>69</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Home;
