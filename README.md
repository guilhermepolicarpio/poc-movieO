# poc-movieO

MovieO is an API for managing movies. The user can enter information such as name, gender, platform and status.

# Author

* [Guilherme Policarpio](https://github.com/guilhermepolicarpio)

# Funcionalities

* Insert movies
* List movies
* Update movies
* Delete movies
* List all movies by status

# Documentation

<h2><span style="color:#A52A2A"><strong>Insert movies</strong></span></h2>

```python
POST /add
```
<table border="1">
    <tr>
        <td><b>Parameter</b></td>
        <td><b>Type</b></td>
        <td><b>Description</b></td>
    </tr>
    <tr>
        <td>name</td>
        <td>string</td>
        <td>Movie name</td>
    </tr>
    <tr>
        <td>platform</td>
        <td>string</td>
        <td>Platform where the movie is available</td>
    </tr>
    <tr>
        <td>gender</td>
        <td>string</td>
        <td>Platform where the movie is available</td>
    </tr>
    <tr>
        <td>status</td>
        <td>string</td>
        <td>Status if the movie has already been watched or not</td>
    </tr>
</table>

<h2><span style="color:#A52A2A"><strong>Get movies</strong></span></h2>

```python
GET /read
```
List all movies

<h2><span style="color:#A52A2A"><strong>Update movies</strong></span></h2>

```python
PUT /update/:id
```
<table border="1">
    <tr>
        <td><b>Parameter</b></td>
        <td><b>Type</b></td>
        <td><b>Description</b></td>
    </tr>
    <tr>
        <td>id</td>
        <td>string</td>
        <td>identify the movie by params</td>
    </tr>
    <tr>
        <td>status</td>
        <td>string</td>
        <td>parameter that will update the status of the movie</td>
    </tr>

</table>

<h2><span style="color:#A52A2A"><strong>Delete movies</strong></span></h2>

```python
DELETE /delete/:id
```
<table border="1">
    <tr>
        <td><b>Parameter</b></td>
        <td><b>Type</b></td>
        <td><b>Description</b></td>
    </tr>
    <tr>
        <td>id</td>
        <td>string</td>
        <td>identify the movie that will be deleted</td>
    </tr>


</table>

<h2><span style="color:#A52A2A"><strong>List movies by status</strong></span></h2>

```python
GET /read/status
```
<table border="1">
    <tr>
        <td><b>Parameter</b></td>
        <td><b>Type</b></td>
        <td><b>Description</b></td>
    </tr>
    <tr>
        <td>status</td>
        <td>string</td>
        <td>list the movies according to the status informed</td>
    </tr>


</table>
