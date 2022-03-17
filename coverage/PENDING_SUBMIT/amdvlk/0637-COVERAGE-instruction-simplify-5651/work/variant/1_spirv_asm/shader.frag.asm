; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 94
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %61 %73
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "func(vf2;"
               OpName %10 "v"
               OpName %23 "buf0"
               OpMemberName %23 0 "_GLF_uniform_float_values"
               OpName %25 ""
               OpName %61 "gl_FragCoord"
               OpName %65 "param"
               OpName %73 "_GLF_color"
               OpName %75 "buf1"
               OpMemberName %75 0 "_GLF_uniform_int_values"
               OpName %77 ""
               OpDecorate %22 ArrayStride 16
               OpMemberDecorate %23 0 Offset 0
               OpDecorate %23 Block
               OpDecorate %25 DescriptorSet 0
               OpDecorate %25 Binding 0
               OpDecorate %61 BuiltIn FragCoord
               OpDecorate %73 Location 0
               OpDecorate %74 ArrayStride 16
               OpMemberDecorate %75 0 Offset 0
               OpDecorate %75 Block
               OpDecorate %77 DescriptorSet 0
               OpDecorate %77 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypePointer Function %7
          %9 = OpTypeFunction %6 %8
         %13 = OpTypeInt 32 1
         %14 = OpConstant %13 1
         %18 = OpConstant %6 1
         %20 = OpTypeInt 32 0
         %21 = OpConstant %20 2
         %22 = OpTypeArray %6 %21
         %23 = OpTypeStruct %22
         %24 = OpTypePointer Uniform %23
         %25 = OpVariable %24 Uniform
         %26 = OpConstant %13 0
         %27 = OpTypePointer Uniform %6
         %30 = OpTypeVector %6 4
         %31 = OpTypeMatrix %30 4
         %32 = OpConstant %6 0
         %55 = OpConstant %20 0
         %60 = OpTypePointer Input %30
         %61 = OpVariable %60 Input
         %67 = OpConstant %6 0.5
         %68 = OpTypeBool
         %72 = OpTypePointer Output %30
         %73 = OpVariable %72 Output
         %74 = OpTypeArray %13 %21
         %75 = OpTypeStruct %74
         %76 = OpTypePointer Uniform %75
         %77 = OpVariable %76 Uniform
         %78 = OpTypePointer Uniform %13
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %65 = OpVariable %8 Function
         %62 = OpLoad %30 %61
         %63 = OpVectorShuffle %7 %62 %62 0 1
         %64 = OpExtInst %7 %1 Fract %63
               OpStore %65 %64
         %66 = OpFunctionCall %6 %11 %65
         %69 = OpFOrdEqual %68 %66 %67
               OpSelectionMerge %71 None
               OpBranchConditional %69 %70 %89
         %70 = OpLabel
         %79 = OpAccessChain %78 %77 %26 %26
         %80 = OpLoad %13 %79
         %81 = OpConvertSToF %6 %80
         %82 = OpAccessChain %78 %77 %26 %26
         %83 = OpLoad %13 %82
         %84 = OpConvertSToF %6 %83
         %85 = OpAccessChain %78 %77 %26 %14
         %86 = OpLoad %13 %85
         %87 = OpConvertSToF %6 %86
         %88 = OpCompositeConstruct %30 %18 %81 %84 %87
               OpStore %73 %88
               OpBranch %71
         %89 = OpLabel
         %90 = OpAccessChain %78 %77 %26 %26
         %91 = OpLoad %13 %90
         %92 = OpConvertSToF %6 %91
         %93 = OpCompositeConstruct %30 %92 %92 %92 %92
               OpStore %73 %93
               OpBranch %71
         %71 = OpLabel
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %6 None %9
         %10 = OpFunctionParameter %8
         %12 = OpLabel
               OpSelectionMerge %17 None
               OpSwitch %14 %17 0 %15 1 %16
         %15 = OpLabel
               OpReturnValue %18
         %16 = OpLabel
         %28 = OpAccessChain %27 %25 %26 %26
         %29 = OpLoad %6 %28
         %33 = OpCompositeConstruct %30 %29 %32 %32 %32
         %34 = OpCompositeConstruct %30 %32 %29 %32 %32
         %35 = OpCompositeConstruct %30 %32 %32 %29 %32
         %36 = OpCompositeConstruct %30 %32 %32 %32 %29
         %37 = OpCompositeConstruct %31 %33 %34 %35 %36
         %38 = OpTranspose %31 %37
         %39 = OpCompositeExtract %6 %38 0 0
         %40 = OpCompositeExtract %6 %38 0 1
         %41 = OpCompositeConstruct %7 %39 %40
         %42 = OpLoad %7 %10
         %43 = OpAccessChain %27 %25 %26 %14
         %44 = OpLoad %6 %43
         %45 = OpCompositeConstruct %30 %44 %32 %32 %32
         %46 = OpCompositeConstruct %30 %32 %44 %32 %32
         %47 = OpCompositeConstruct %30 %32 %32 %44 %32
         %48 = OpCompositeConstruct %30 %32 %32 %32 %44
         %49 = OpCompositeConstruct %31 %45 %46 %47 %48
         %50 = OpTranspose %31 %49
         %51 = OpCompositeExtract %6 %50 0 0
         %52 = OpCompositeExtract %6 %50 0 1
         %53 = OpCompositeConstruct %7 %51 %52
         %54 = OpExtInst %7 %1 FClamp %41 %42 %53
         %56 = OpCompositeExtract %6 %54 0
               OpReturnValue %56
         %17 = OpLabel
         %59 = OpUndef %6
               OpReturnValue %59
               OpFunctionEnd
