#version 320 es

precision highp float;

layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 resolution;
};
void main()
{
 float patternize_inline_return_value_0 = 1.0;
 vec2 st = vec2(1.0);
 patternize_inline_return_value_0 = st.x;
 vec3 color = vec3(1.0);
 color = vec3(patternize_inline_return_value_0);
 if(1 != int(resolution.y))
  {
   if(gl_FragCoord.y < 1.0)
    {
     return;
    }
   color.yz -= 1.0;
  }
 else
  {
   discard;
  }
 _GLF_color = vec4(color, 1.0);
}
