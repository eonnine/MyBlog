package com.graphql.blog.menu.main;

import java.io.FileNotFoundException;
import java.io.IOException;

import javax.script.ScriptException;

import com.graphql.blog.config.React;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
  
  @Autowired
  private React react;

  @RequestMapping("/")
  public String main (Model model) throws ScriptException, IOException, FileNotFoundException, NoSuchMethodException {
    String App = react.renderInit();
    model.addAttribute("App", App);
    return "index";
  }

}