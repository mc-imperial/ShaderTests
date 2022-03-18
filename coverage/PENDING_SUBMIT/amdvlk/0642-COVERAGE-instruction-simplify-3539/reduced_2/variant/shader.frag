#version 320 es

precision highp float;

layout(set = 0, binding = 0) uniform sampler2D tex;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 1) uniform buf1 {
 highp vec2 injectionSwitch;
};
precision highp int;

precision highp float;

void main()
{
 int i = 1;
 i = 0;
 float h = 1.0;
 h = texture(tex, vec2(1.0)).y;
 while(h < 1.0 && i < 32)
  {
   if(1.0 > injectionSwitch.y)
    {
     continue;
    }
   i ++;
  }
}
