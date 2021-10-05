; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 90
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %13 %77
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "ipos"
               OpName %13 "gl_FragCoord"
               OpName %19 "a"
               OpName %46 "v"
               OpName %50 "tex"
               OpName %77 "_GLF_color"
               OpName %85 "indexable"
               OpDecorate %13 BuiltIn FragCoord
               OpDecorate %50 RelaxedPrecision
               OpDecorate %50 DescriptorSet 0
               OpDecorate %50 Binding 0
               OpDecorate %51 RelaxedPrecision
               OpDecorate %54 RelaxedPrecision
               OpDecorate %77 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeVector %6 2
          %8 = OpTypePointer Function %7
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 4
         %12 = OpTypePointer Input %11
         %13 = OpVariable %12 Input
         %14 = OpTypeVector %10 2
         %18 = OpTypePointer Function %6
         %20 = OpTypeInt 32 0
         %21 = OpConstant %20 0
         %24 = OpConstant %6 5
         %26 = OpConstant %20 1
         %32 = OpConstant %6 10
         %42 = OpConstant %6 3
         %43 = OpTypeBool
         %45 = OpTypePointer Function %11
         %47 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %48 = OpTypeSampledImage %47
         %49 = OpTypePointer UniformConstant %48
         %50 = OpVariable %49 UniformConstant
         %52 = OpConstant %10 1
         %53 = OpConstantComposite %14 %52 %52
         %60 = OpTypePointer Function %10
         %63 = OpConstant %10 2
         %65 = OpConstant %6 4
         %69 = OpConstant %6 0
         %76 = OpTypePointer Output %11
         %77 = OpVariable %76 Output
         %78 = OpConstant %20 4
         %79 = OpTypeArray %11 %78
         %80 = OpConstant %10 0
         %81 = OpConstantComposite %11 %52 %80 %80 %52
         %82 = OpConstantComposite %79 %81 %81 %81 %81
         %84 = OpTypePointer Function %79
         %89 = OpConstantComposite %11 %80 %80 %80 %80
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %19 = OpVariable %18 Function
         %46 = OpVariable %45 Function
         %85 = OpVariable %84 Function
         %15 = OpLoad %11 %13
         %16 = OpVectorShuffle %14 %15 %15 0 1
         %17 = OpConvertFToS %7 %16
               OpStore %9 %17
         %22 = OpAccessChain %18 %9 %21
         %23 = OpLoad %6 %22
         %25 = OpBitwiseAnd %6 %23 %24
         %27 = OpAccessChain %18 %9 %26
         %28 = OpLoad %6 %27
         %29 = OpBitwiseAnd %6 %28 %24
         %30 = OpAccessChain %18 %9 %21
         %31 = OpLoad %6 %30
         %33 = OpBitwiseAnd %6 %31 %32
         %34 = OpBitwiseOr %6 %29 %33
         %35 = OpIAdd %6 %25 %34
               OpStore %19 %35
               OpBranch %36
         %36 = OpLabel
               OpLoopMerge %38 %39 None
               OpBranch %40
         %40 = OpLabel
         %41 = OpLoad %6 %19
         %44 = OpSGreaterThan %43 %41 %42
               OpBranchConditional %44 %37 %38
         %37 = OpLabel
         %51 = OpLoad %48 %50
         %54 = OpImageSampleImplicitLod %11 %51 %53
               OpStore %46 %54
               OpBranch %55
         %55 = OpLabel
               OpLoopMerge %57 %58 None
               OpBranch %59
         %59 = OpLabel
         %61 = OpAccessChain %60 %46 %21
         %62 = OpLoad %10 %61
         %64 = OpFOrdGreaterThan %43 %62 %63
               OpBranchConditional %64 %56 %57
         %56 = OpLabel
               OpBranch %58
         %58 = OpLabel
               OpBranch %55
         %57 = OpLabel
         %66 = OpLoad %6 %19
         %67 = OpISub %6 %66 %65
               OpStore %19 %67
               OpBranch %39
         %39 = OpLabel
               OpBranch %36
         %38 = OpLabel
         %68 = OpLoad %6 %19
         %70 = OpSGreaterThanEqual %43 %68 %69
         %71 = OpLoad %6 %19
         %72 = OpSLessThan %43 %71 %65
         %73 = OpLogicalAnd %43 %70 %72
               OpSelectionMerge %75 None
               OpBranchConditional %73 %74 %88
         %74 = OpLabel
         %83 = OpLoad %6 %19
               OpStore %85 %82
         %86 = OpAccessChain %45 %85 %83
         %87 = OpLoad %11 %86
               OpStore %77 %87
               OpBranch %75
         %88 = OpLabel
               OpStore %77 %89
               OpBranch %75
         %75 = OpLabel
               OpReturn
               OpFunctionEnd
