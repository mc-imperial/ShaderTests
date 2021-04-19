; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 73
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %13
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %13 "_GLF_color"
               OpName %17 "buf0"
               OpMemberName %17 0 "_GLF_uniform_int_values"
               OpName %19 ""
               OpDecorate %13 Location 0
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 4
         %12 = OpTypePointer Output %11
         %13 = OpVariable %12 Output
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 2
         %16 = OpTypeArray %6 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpConstant %6 1
         %21 = OpTypePointer Uniform %6
         %41 = OpConstant %6 100
         %42 = OpTypeBool
         %46 = OpConstantTrue %42
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpStore %8 %9
         %22 = OpAccessChain %21 %19 %9 %20
         %23 = OpLoad %6 %22
         %24 = OpConvertSToF %10 %23
         %25 = OpAccessChain %21 %19 %9 %9
         %26 = OpLoad %6 %25
         %27 = OpConvertSToF %10 %26
         %28 = OpAccessChain %21 %19 %9 %9
         %29 = OpLoad %6 %28
         %30 = OpConvertSToF %10 %29
         %31 = OpAccessChain %21 %19 %9 %20
         %32 = OpLoad %6 %31
         %33 = OpConvertSToF %10 %32
         %34 = OpCompositeConstruct %11 %24 %27 %30 %33
               OpStore %13 %34
               OpBranch %35
         %35 = OpLabel
               OpLoopMerge %37 %38 None
               OpBranch %39
         %39 = OpLabel
         %40 = OpLoad %6 %8
         %43 = OpSLessThan %42 %40 %41
               OpBranchConditional %43 %36 %37
         %36 = OpLabel
         %44 = OpLoad %6 %8
         %45 = OpIAdd %6 %44 %20
               OpStore %8 %45
         %47 = OpLogicalNot %42 %46
               OpSelectionMerge %49 None
               OpBranchConditional %47 %48 %49
         %48 = OpLabel
         %50 = OpAccessChain %21 %19 %9 %9
         %51 = OpLoad %6 %50
         %52 = OpAccessChain %21 %19 %9 %20
         %53 = OpLoad %6 %52
         %54 = OpIEqual %42 %51 %53
               OpBranch %49
         %49 = OpLabel
         %55 = OpPhi %42 %46 %36 %54 %48
         %56 = OpLogicalNot %42 %55
               OpSelectionMerge %58 None
               OpBranchConditional %56 %57 %58
         %57 = OpLabel
               OpBranch %37
         %58 = OpLabel
               OpBranch %38
         %38 = OpLabel
               OpBranch %35
         %37 = OpLabel
               OpBranch %60
         %60 = OpLabel
               OpLoopMerge %62 %63 None
               OpBranch %64
         %64 = OpLabel
         %65 = OpLoad %6 %8
         %66 = OpSLessThan %42 %65 %41
               OpBranchConditional %66 %61 %62
         %61 = OpLabel
         %67 = OpLoad %6 %8
         %68 = OpIAdd %6 %67 %20
               OpStore %8 %68
         %69 = OpAccessChain %21 %19 %9 %9
         %70 = OpLoad %6 %69
         %71 = OpConvertSToF %10 %70
         %72 = OpCompositeConstruct %11 %71 %71 %71 %71
               OpStore %13 %72
               OpBranch %63
         %63 = OpLabel
               OpBranch %60
         %62 = OpLabel
               OpReturn
               OpFunctionEnd
