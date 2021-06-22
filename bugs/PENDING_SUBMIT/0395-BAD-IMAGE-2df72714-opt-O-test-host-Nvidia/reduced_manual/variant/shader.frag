#version 320 es

precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform sampler2D tex;

float ReallyApproxNormalizedAtan2(vec2 v)
{
 float pi2 = 1.0 / (355.0 / 113.0);
 if(length(v) < 0.001)
  {
   return 0.0;
  }
 vec2 a = abs(v);
 float z;
 if(a.y > a.x)
  {
   z = a.x / a.y;
  }
 else
  {
   z = a.y / a.x;
  }
 float th = (0.97 - 0.19 * z * z) * z * pi2;
 if(a.y < a.x)
  {
   th = 0.5 - th;
  }
 if(v.x < 0.0)
  {
   th = 1.0 - th;
  }
 if(v.y < 0.0)
  {
   th = - th;
  }
 return th;
}
vec2 polarize(vec2 coord)
{
 vec2 center = coord - vec2(0.5);
 float dist = length(center);
 float angle = ReallyApproxNormalizedAtan2(center);
 return vec2(dist, angle);
}
void main()
{
 vec2 coord = gl_FragCoord.xy * (1.0 / 256.0);
 vec2 coord1 = polarize(coord + vec2(20.0 / 256.0, - 80.0 / 256.0));
 vec2 coord2 = polarize(coord + vec2(- 60.0 / 256.0, 40.0 / 256.0));
 vec2 coord3 = polarize(coord);
 coord = coord1 - coord2 + coord3;
 coord = floor(coord * 256.0) / 256.0;
 // This is semantically same as in reference shader
 _GLF_color =
    vec4(
        // Result of min = vec3(texture(tex, coord).xyz)
        min(
            vec3(vec3(texture(tex, coord).xyz)),
            vec3(
                // Result of mix = vec3(texture(tex, coord).xyz)
                mix(
                    vec3(
                        (vec3(texture(tex, coord).xyz))[0],
                        1.0,
                        min(
                            (vec3(texture(tex, coord).xyz))[2],
                            (vec3(texture(tex, coord).xyz))[2]
                        )
                    ),
                    vec3(1.0, (vec3(texture(tex, coord).xyz))[1], 1.0),
                    bvec3(false, true, false)
                )
            )
        ),
        1.0
    );
}
