; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 91
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %29 %70
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "m"
               OpName %11 "buf_push"
               OpMemberName %11 0 "zero"
               OpName %13 ""
               OpName %25 "v0"
               OpName %29 "gl_FragCoord"
               OpName %34 "v1"
               OpName %38 "a"
               OpName %42 "buf0"
               OpMemberName %42 0 "_GLF_uniform_int_values"
               OpName %44 ""
               OpName %49 "b"
               OpName %70 "_GLF_color"
               OpMemberDecorate %11 0 Offset 0
               OpDecorate %11 Block
               OpDecorate %29 BuiltIn FragCoord
               OpDecorate %41 ArrayStride 16
               OpMemberDecorate %42 0 Offset 0
               OpDecorate %42 Block
               OpDecorate %44 DescriptorSet 0
               OpDecorate %44 Binding 0
               OpDecorate %70 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypeMatrix %7 2
          %9 = OpTypePointer Function %8
         %11 = OpTypeStruct %6
         %12 = OpTypePointer PushConstant %11
         %13 = OpVariable %12 PushConstant
         %14 = OpTypeInt 32 1
         %15 = OpConstant %14 0
         %16 = OpTypePointer PushConstant %6
         %19 = OpConstant %6 1
         %20 = OpConstant %6 0
         %24 = OpTypePointer Function %7
         %27 = OpTypeVector %6 4
         %28 = OpTypePointer Input %27
         %29 = OpVariable %28 Input
         %37 = OpTypePointer Function %14
         %39 = OpTypeInt 32 0
         %40 = OpConstant %39 3
         %41 = OpTypeArray %14 %40
         %42 = OpTypeStruct %41
         %43 = OpTypePointer Uniform %42
         %44 = OpVariable %43 Uniform
         %45 = OpConstant %14 1
         %46 = OpTypePointer Uniform %14
         %52 = OpTypeBool
         %69 = OpTypePointer Output %27
         %70 = OpVariable %69 Output
         %74 = OpConstant %39 0
         %75 = OpTypePointer Function %6
         %78 = OpConstant %39 1
         %86 = OpConstant %14 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %10 = OpVariable %9 Function
         %25 = OpVariable %24 Function
         %34 = OpVariable %24 Function
         %38 = OpVariable %37 Function
         %49 = OpVariable %37 Function
         %54 = OpVariable %37 Function
         %17 = OpAccessChain %16 %13 %15
         %18 = OpLoad %6 %17
         %21 = OpCompositeConstruct %7 %18 %20
         %22 = OpCompositeConstruct %7 %20 %18
         %23 = OpCompositeConstruct %8 %21 %22
               OpStore %10 %23
         %26 = OpLoad %8 %10
         %30 = OpLoad %27 %29
         %31 = OpVectorShuffle %7 %30 %30 0 1
         %32 = OpMatrixTimesVector %7 %26 %31
         %33 = OpExtInst %7 %1 RoundEven %32
               OpStore %25 %33
         %35 = OpLoad %7 %25
         %36 = OpExtInst %7 %1 Asinh %35
               OpStore %34 %36
         %47 = OpAccessChain %46 %44 %15 %45
         %48 = OpLoad %14 %47
               OpStore %38 %48
         %50 = OpLoad %14 %38
         %51 = OpConvertSToF %6 %50
         %53 = OpIsNan %52 %51
               OpSelectionMerge %56 None
               OpBranchConditional %53 %55 %59
         %55 = OpLabel
         %57 = OpAccessChain %46 %44 %15 %45
         %58 = OpLoad %14 %57
               OpStore %54 %58
               OpBranch %56
         %59 = OpLabel
         %60 = OpAccessChain %46 %44 %15 %15
         %61 = OpLoad %14 %60
               OpStore %54 %61
               OpBranch %56
         %56 = OpLabel
         %62 = OpLoad %14 %54
               OpStore %49 %62
         %63 = OpLoad %14 %49
         %64 = OpAccessChain %46 %44 %15 %15
         %65 = OpLoad %14 %64
         %66 = OpIEqual %52 %63 %65
               OpSelectionMerge %68 None
               OpBranchConditional %66 %67 %85
         %67 = OpLabel
         %71 = OpAccessChain %46 %44 %15 %45
         %72 = OpLoad %14 %71
         %73 = OpConvertSToF %6 %72
         %76 = OpAccessChain %75 %34 %74
         %77 = OpLoad %6 %76
         %79 = OpAccessChain %75 %34 %78
         %80 = OpLoad %6 %79
         %81 = OpAccessChain %46 %44 %15 %45
         %82 = OpLoad %14 %81
         %83 = OpConvertSToF %6 %82
         %84 = OpCompositeConstruct %27 %73 %77 %80 %83
               OpStore %70 %84
               OpBranch %68
         %85 = OpLabel
         %87 = OpAccessChain %46 %44 %15 %86
         %88 = OpLoad %14 %87
         %89 = OpConvertSToF %6 %88
         %90 = OpCompositeConstruct %27 %89 %89 %89 %89
               OpStore %70 %90
               OpBranch %68
         %68 = OpLabel
               OpReturn
               OpFunctionEnd
