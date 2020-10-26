package com.sample.step_definitions;

import com.google.gson.Gson;

import com.sample.pojos.order.Order;
import com.sample.pojos.pets.Pets;
import com.sample.utilities.ConfigurationReader;


import com.sun.net.httpserver.HttpServer;
import io.cucumber.java.en.*;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.apache.http.protocol.HTTP;
import org.junit.Assert;
import java.util.List;
import java.util.Map;
import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.when;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;


public class API_Steps {
    RequestSpecification requestSpecification;
    Response response;
    String baseURI = ConfigurationReader.get("baseURI");


    @Given("Headers accepts content type as {string}")
    public void headers_accepts_content_type_as(String contentType) {
        requestSpecification = given().accept(contentType).contentType(ContentType.JSON);
    }

    @When("User sends GET request to {string}{int}")
    public void user_sends_GET_request_to(String path, int id){
        response = when().get(baseURI+path+id);

    }

    @Then("User verifies that response status code is {int}")
    public void user_verifies_that_response_status_code_is(int statusCode) {
        System.out.println("statusCode = " + statusCode);
        System.out.println("response.statusCode() = " + response.statusCode());
        assertEquals(statusCode, response.statusCode());
    }

    @Then("User verifies that response content type is {string}")
    public void user_verifies_that_response_content_type_is(String contentType) {
        assertEquals(contentType, response.contentType());
    }

    @When("User sends POST request to {string}")
    public void user_sends_POST_request_to(String path, Map<String,String> pets) {
        System.out.println("pets = " + pets);
        Pets pet = new Pets();
        pet.setId(Integer.parseInt(pets.get("id")));
        pet.setName(pets.get("name"));
        pet.setStatus(pets.get("status"));
        System.out.println("path = " + baseURI+path);
        response = requestSpecification.body(pet.toString()).when().put(baseURI+path);
    }

    @Given("User sends a GET request to {string}")
    public void user_sends_GET_request_to(String string) {
        response = when().get(baseURI+string);

    }

    @When("User selects pets with {string}")
    public void user_selects_pets_with(String string) {
        requestSpecification = given().queryParam("status",string);
    }

    @When("Verify response structure and content as {string}")
    public void verify_response_structure_and_content_as(String string) {
        String actualbody = response.body().prettyPrint();
        string="[\n" +
                "    \n" +
                "]";
        System.out.println("actualbody = " + actualbody);
        System.out.println("string = " + string);
        assertEquals(string,actualbody);
    }


    @Given("User sends DELETE request to {string}{int}")
    public void user_sends_DELETE_request_to(String string, Integer id) {
        response = when().delete(baseURI+string+id);

    }

    @When("Select {string} for the authorization filters as a API key")
    public void select_for_the_authorization_filters_as_a_API_key(String key) {
        requestSpecification = given().queryParam("api_key",key);
    }

    @When("User sends POST request to as an {string}")
    public void user_sends_POST_request_to_as_an(String path, Map<String,String> orders) {
        Order order = new Order();
        order.setPetId(Integer.parseInt(orders.get("petId")));
        order.setQuantity(Integer.parseInt(orders.get("quantity")));
        order.setStatus(orders.get("status"));
        order.setComplete(Boolean.parseBoolean(orders.get("complete")));
        response =requestSpecification.body(order.toString()).when().post(baseURI+path);
        System.out.println(order.toString());


    }




}
