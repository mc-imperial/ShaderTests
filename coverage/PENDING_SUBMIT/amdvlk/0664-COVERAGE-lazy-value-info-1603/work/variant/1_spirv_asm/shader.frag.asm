; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 101
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %40
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %24 "buf2"
               OpMemberName %24 0 "injectionSwitch"
               OpName %26 ""
               OpName %40 "gl_FragCoord"
               OpName %46 "buf0"
               OpMemberName %46 0 "_GLF_uniform_float_values"
               OpName %48 ""
               OpName %59 "i"
               OpDecorate %9 Location 0
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpMemberDecorate %24 0 Offset 0
               OpDecorate %24 Block
               OpDecorate %26 DescriptorSet 0
               OpDecorate %26 Binding 2
               OpDecorate %40 BuiltIn FragCoord
               OpDecorate %45 ArrayStride 16
               OpMemberDecorate %46 0 Offset 0
               OpDecorate %46 Block
               OpDecorate %48 DescriptorSet 0
               OpDecorate %48 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 3
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpTypePointer Uniform %10
         %23 = OpTypeVector %6 2
         %24 = OpTypeStruct %23
         %25 = OpTypePointer Uniform %24
         %26 = OpVariable %25 Uniform
         %27 = OpConstant %11 0
         %28 = OpTypePointer Uniform %6
         %31 = OpConstant %11 1
         %34 = OpTypeBool
         %39 = OpTypePointer Input %7
         %40 = OpVariable %39 Input
         %41 = OpTypePointer Input %6
         %44 = OpConstant %11 2
         %45 = OpTypeArray %6 %44
         %46 = OpTypeStruct %45
         %47 = OpTypePointer Uniform %46
         %48 = OpVariable %47 Uniform
         %54 = OpConstant %10 1
         %58 = OpTypePointer Function %10
         %71 = OpConstant %10 2
         %81 = OpConstant %6 1
         %97 = OpConstant %6 0
         %98 = OpConstantComposite %7 %97 %97 %97 %97
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %59 = OpVariable %58 Function
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %10 %19
         %21 = OpConvertSToF %6 %20
         %22 = OpCompositeConstruct %7 %21 %21 %21 %21
               OpStore %9 %22
         %29 = OpAccessChain %28 %26 %17 %27
         %30 = OpLoad %6 %29
         %32 = OpAccessChain %28 %26 %17 %31
         %33 = OpLoad %6 %32
         %35 = OpFOrdGreaterThan %34 %30 %33
               OpSelectionMerge %37 None
               OpBranchConditional %35 %36 %38
         %36 = OpLabel
               OpBranch %37
         %38 = OpLabel
         %42 = OpAccessChain %41 %40 %27
         %43 = OpLoad %6 %42
         %49 = OpAccessChain %28 %48 %17 %17
         %50 = OpLoad %6 %49
         %51 = OpFOrdGreaterThanEqual %34 %43 %50
               OpSelectionMerge %53 None
               OpBranchConditional %51 %52 %53
         %52 = OpLabel
         %55 = OpAccessChain %28 %48 %17 %54
         %56 = OpLoad %6 %55
         %57 = OpCompositeConstruct %7 %56 %56 %56 %56
               OpStore %9 %57
               OpBranch %53
         %53 = OpLabel
         %60 = OpAccessChain %18 %16 %17 %17
         %61 = OpLoad %10 %60
               OpStore %59 %61
               OpBranch %62
         %62 = OpLabel
               OpLoopMerge %64 %65 None
               OpBranch %66
         %66 = OpLabel
         %67 = OpLoad %10 %59
         %68 = OpAccessChain %18 %16 %17 %54
         %69 = OpLoad %10 %68
         %70 = OpSLessThan %34 %67 %69
               OpBranchConditional %70 %63 %64
         %63 = OpLabel
         %72 = OpAccessChain %18 %16 %17 %71
         %73 = OpLoad %10 %72
         %74 = OpConvertSToF %6 %73
         %75 = OpAccessChain %18 %16 %17 %17
         %76 = OpLoad %10 %75
         %77 = OpConvertSToF %6 %76
         %78 = OpAccessChain %18 %16 %17 %17
         %79 = OpLoad %10 %78
         %80 = OpConvertSToF %6 %79
         %82 = OpCompositeConstruct %7 %74 %77 %80 %81
               OpStore %9 %82
         %83 = OpAccessChain %41 %40 %31
         %84 = OpLoad %6 %83
         %85 = OpAccessChain %28 %48 %17 %17
         %86 = OpLoad %6 %85
         %87 = OpFOrdGreaterThanEqual %34 %84 %86
               OpSelectionMerge %89 None
               OpBranchConditional %87 %88 %89
         %88 = OpLabel
         %90 = OpAccessChain %28 %26 %17 %27
         %91 = OpLoad %6 %90
         %92 = OpAccessChain %28 %26 %17 %31
         %93 = OpLoad %6 %92
         %94 = OpFOrdGreaterThan %34 %91 %93
               OpSelectionMerge %96 None
               OpBranchConditional %94 %95 %96
         %95 = OpLabel
               OpStore %9 %98
               OpBranch %96
         %96 = OpLabel
               OpBranch %89
         %89 = OpLabel
               OpBranch %65
         %65 = OpLabel
         %99 = OpLoad %10 %59
        %100 = OpIAdd %10 %99 %54
               OpStore %59 %100
               OpBranch %62
         %64 = OpLabel
               OpBranch %37
         %37 = OpLabel
               OpReturn
               OpFunctionEnd
