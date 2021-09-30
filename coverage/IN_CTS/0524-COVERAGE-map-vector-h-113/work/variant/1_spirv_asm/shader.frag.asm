; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 104
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %85
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %24 "a"
               OpName %28 "buf0"
               OpMemberName %28 0 "_GLF_uniform_int_values"
               OpName %30 ""
               OpName %40 "i"
               OpName %85 "_GLF_color"
               OpDecorate %27 ArrayStride 16
               OpMemberDecorate %28 0 Offset 0
               OpDecorate %28 Block
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 0
               OpDecorate %85 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %6 1
         %13 = OpConstant %6 2
         %14 = OpConstant %6 3
         %15 = OpConstant %6 4
         %16 = OpConstant %6 5
         %17 = OpConstant %6 6
         %18 = OpConstant %6 7
         %19 = OpConstant %6 8
         %20 = OpConstant %6 9
         %21 = OpConstant %6 10
         %22 = OpConstantComposite %9 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21
         %23 = OpTypePointer Function %6
         %25 = OpConstant %6 0
         %26 = OpConstant %7 3
         %27 = OpTypeArray %6 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpTypePointer Uniform %6
         %36 = OpTypeBool
         %56 = OpConstant %6 -1
         %66 = OpTypeVector %6 2
         %68 = OpConstant %7 1
         %82 = OpTypeFloat 32
         %83 = OpTypeVector %82 4
         %84 = OpTypePointer Output %83
         %85 = OpVariable %84 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %24 = OpVariable %23 Function
         %40 = OpVariable %23 Function
               OpStore %11 %22
               OpStore %24 %25
         %32 = OpAccessChain %31 %30 %25 %12
         %33 = OpLoad %6 %32
         %34 = OpAccessChain %23 %11 %33
         %35 = OpLoad %6 %34
         %37 = OpIEqual %36 %35 %13
               OpSelectionMerge %39 None
               OpBranchConditional %37 %38 %39
         %38 = OpLabel
         %41 = OpAccessChain %31 %30 %25 %13
         %42 = OpLoad %6 %41
               OpStore %40 %42
               OpBranch %43
         %43 = OpLabel
               OpLoopMerge %45 %46 None
               OpBranch %47
         %47 = OpLabel
         %48 = OpLoad %6 %40
         %49 = OpAccessChain %31 %30 %25 %25
         %50 = OpLoad %6 %49
         %51 = OpSLessThan %36 %48 %50
               OpBranchConditional %51 %44 %45
         %44 = OpLabel
               OpBranch %46
         %46 = OpLabel
         %52 = OpLoad %6 %40
         %53 = OpIAdd %6 %52 %12
               OpStore %40 %53
               OpBranch %43
         %45 = OpLabel
         %54 = OpLoad %6 %24
         %55 = OpIAdd %6 %54 %12
               OpStore %24 %55
               OpBranch %39
         %39 = OpLabel
         %57 = OpLoad %6 %24
         %58 = OpSMod %6 %56 %57
         %59 = OpAccessChain %31 %30 %25 %13
         %60 = OpLoad %6 %59
         %61 = OpIEqual %36 %58 %60
               OpSelectionMerge %63 None
               OpBranchConditional %61 %62 %63
         %62 = OpLabel
         %64 = OpAccessChain %31 %30 %25 %12
         %65 = OpLoad %6 %64
         %67 = OpCompositeConstruct %66 %65 %65
         %69 = OpCompositeExtract %6 %67 1
         %70 = OpAccessChain %31 %30 %25 %13
         %71 = OpLoad %6 %70
         %72 = OpAccessChain %23 %11 %69
               OpStore %72 %71
               OpBranch %63
         %63 = OpLabel
         %73 = OpAccessChain %31 %30 %25 %12
         %74 = OpLoad %6 %73
         %75 = OpAccessChain %23 %11 %74
         %76 = OpLoad %6 %75
         %77 = OpAccessChain %31 %30 %25 %13
         %78 = OpLoad %6 %77
         %79 = OpIEqual %36 %76 %78
               OpSelectionMerge %81 None
               OpBranchConditional %79 %80 %99
         %80 = OpLabel
         %86 = OpAccessChain %31 %30 %25 %12
         %87 = OpLoad %6 %86
         %88 = OpConvertSToF %82 %87
         %89 = OpAccessChain %31 %30 %25 %13
         %90 = OpLoad %6 %89
         %91 = OpConvertSToF %82 %90
         %92 = OpAccessChain %31 %30 %25 %13
         %93 = OpLoad %6 %92
         %94 = OpConvertSToF %82 %93
         %95 = OpAccessChain %31 %30 %25 %12
         %96 = OpLoad %6 %95
         %97 = OpConvertSToF %82 %96
         %98 = OpCompositeConstruct %83 %88 %91 %94 %97
               OpStore %85 %98
               OpBranch %81
         %99 = OpLabel
        %100 = OpAccessChain %31 %30 %25 %13
        %101 = OpLoad %6 %100
        %102 = OpConvertSToF %82 %101
        %103 = OpCompositeConstruct %83 %102 %102 %102 %102
               OpStore %85 %103
               OpBranch %81
         %81 = OpLabel
               OpReturn
               OpFunctionEnd
