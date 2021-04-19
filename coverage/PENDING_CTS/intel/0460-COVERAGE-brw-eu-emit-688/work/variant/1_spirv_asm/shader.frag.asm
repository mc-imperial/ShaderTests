; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 84
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %65
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %20 "i"
               OpName %49 "indexable"
               OpName %65 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %65 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 5
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 2
         %17 = OpTypePointer Uniform %6
         %21 = OpConstant %6 3
         %32 = OpTypeBool
         %34 = OpConstant %9 9
         %35 = OpTypeArray %6 %34
         %36 = OpConstant %6 1
         %37 = OpConstant %6 4
         %38 = OpConstant %6 5
         %39 = OpConstant %6 6
         %40 = OpConstant %6 7
         %41 = OpConstant %6 8
         %42 = OpConstant %6 9
         %43 = OpConstantComposite %35 %36 %16 %21 %37 %38 %39 %40 %41 %42
         %48 = OpTypePointer Function %35
         %62 = OpTypeFloat 32
         %63 = OpTypeVector %62 4
         %64 = OpTypePointer Output %63
         %65 = OpVariable %64 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %49 = OpVariable %48 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %22 = OpAccessChain %17 %14 %15 %21
         %23 = OpLoad %6 %22
               OpStore %20 %23
               OpBranch %24
         %24 = OpLabel
               OpLoopMerge %26 %27 None
               OpBranch %28
         %28 = OpLabel
         %29 = OpLoad %6 %20
         %30 = OpAccessChain %17 %14 %15 %15
         %31 = OpLoad %6 %30
         %33 = OpSLessThan %32 %29 %31
               OpBranchConditional %33 %25 %26
         %25 = OpLabel
         %44 = OpLoad %6 %20
         %45 = OpAccessChain %17 %14 %15 %37
         %46 = OpLoad %6 %45
         %47 = OpSMod %6 %44 %46
               OpStore %49 %43
         %50 = OpAccessChain %7 %49 %47
         %51 = OpLoad %6 %50
         %52 = OpLoad %6 %8
         %53 = OpIAdd %6 %52 %51
               OpStore %8 %53
               OpBranch %27
         %27 = OpLabel
         %54 = OpLoad %6 %20
         %55 = OpIAdd %6 %54 %36
               OpStore %20 %55
               OpBranch %24
         %26 = OpLabel
         %56 = OpLoad %6 %8
         %57 = OpAccessChain %17 %14 %15 %36
         %58 = OpLoad %6 %57
         %59 = OpIEqual %32 %56 %58
               OpSelectionMerge %61 None
               OpBranchConditional %59 %60 %79
         %60 = OpLabel
         %66 = OpAccessChain %17 %14 %15 %16
         %67 = OpLoad %6 %66
         %68 = OpConvertSToF %62 %67
         %69 = OpAccessChain %17 %14 %15 %21
         %70 = OpLoad %6 %69
         %71 = OpConvertSToF %62 %70
         %72 = OpAccessChain %17 %14 %15 %21
         %73 = OpLoad %6 %72
         %74 = OpConvertSToF %62 %73
         %75 = OpAccessChain %17 %14 %15 %16
         %76 = OpLoad %6 %75
         %77 = OpConvertSToF %62 %76
         %78 = OpCompositeConstruct %63 %68 %71 %74 %77
               OpStore %65 %78
               OpBranch %61
         %79 = OpLabel
         %80 = OpAccessChain %17 %14 %15 %21
         %81 = OpLoad %6 %80
         %82 = OpConvertSToF %62 %81
         %83 = OpCompositeConstruct %63 %82 %82 %82 %82
               OpStore %65 %83
               OpBranch %61
         %61 = OpLabel
               OpReturn
               OpFunctionEnd
