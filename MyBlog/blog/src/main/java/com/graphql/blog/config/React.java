package com.graphql.blog.config;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

@Component
public class React {

  @Value(value = "classpath:static/react/polyfill/nashorn.js")
  private Resource nashornPolyfill;

  @Value(value = "classpath:static/react/dist/bundle.js")
  private Resource bundleJs;

  public String renderInit() throws ScriptException, IOException, FileNotFoundException, NoSuchMethodException {
    ScriptEngine engine = this.getScriptEngine();
    this.loadFile(engine);
    Object App = this.invokeRenderFunction(engine);
    return String.valueOf(App);
  }

  private ScriptEngine getScriptEngine() throws IOException {
    ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
    return engine;
  }

  private void loadFile (ScriptEngine engine) throws ScriptException, FileNotFoundException, IOException {
    engine.eval (new FileReader(nashornPolyfill.getFile().getCanonicalPath()));
    engine.eval (new FileReader(bundleJs.getFile().getCanonicalPath()));
  }

  private Object invokeRenderFunction (ScriptEngine engine) throws ScriptException, NoSuchMethodException {
    Invocable invocable  = (Invocable) engine;
    Object App = invocable.invokeFunction("render");
    return App;
  }

}