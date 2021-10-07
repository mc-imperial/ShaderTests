#version 320 es

precision highp int;

precision highp float;

vec4 GLF_live5_GLF_color = vec4(1.0);

precision highp int;

precision highp float;

vec3 drawShape(vec2 square)
{
 bool c7 = true;
 c7 = 1.0 < square.y;
 if(c7)
  {
   return vec3(1.0);
  }
 ivec2 GLF_live5icoord = ivec2(1);
 int GLF_live5res = 1;
 GLF_live5res &= ((GLF_live5icoord.x != 1 ? 0 : ~ 0) | (GLF_live5icoord.x != 1 ? 0 : ~ 0)) >> 1;
 GLF_live5_GLF_color = vec4(vec3(GLF_live5res == 1 ? 1.0 : 1.0), 1.0);
 return vec3(1.0);
}
void main()
{
 drawShape(vec2(1.0));
}
