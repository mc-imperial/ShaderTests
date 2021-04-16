#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp float;

precision highp int;

bool collision(vec2 pos)
{
 if(pos.x < 1.0)
  {
   return true;
  }
 if(pos.y < 1.0)
  {
   return false;
  }
 if(injectionSwitch.x > 1.0)
  {
   return true;
  }
 return true;
}
void main()
{
 vec2 pos = vec2(1.0);
 pos = gl_FragCoord.xy;
 if(collision(pos))
  {
   discard;
  }
}
