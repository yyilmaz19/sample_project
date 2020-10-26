package com.sample.pojos.pets;
import java.io.Serializable;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Tag implements Serializable
{

    @SerializedName("id")
    @Expose
    private int id;
    @SerializedName("name")
    @Expose
    private String name;
    private final static long serialVersionUID = -4093840631808316389L;

    /**
     * No args constructor for use in serialization
     *
     */
    public Tag() {
    }

    /**
     *
     * @param name
     * @param id
     */
    public Tag(int id, String name) {
        super();
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}

