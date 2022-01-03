; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 63
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %59
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "func(f1;"
               OpName %9 "ref"
               OpName %14 "_GLF_global_loop_count"
               OpName %17 "i"
               OpName %38 "buf1"
               OpMemberName %38 0 "_GLF_uniform_float_values"
               OpName %40 ""
               OpName %41 "param"
               OpName %48 "buf0"
               OpMemberName %48 0 "_GLF_uniform_int_values"
               OpName %50 ""
               OpName %59 "_GLF_color"
               OpDecorate %37 ArrayStride 16
               OpMemberDecorate %38 0 Offset 0
               OpDecorate %38 Block
               OpDecorate %40 DescriptorSet 0
               OpDecorate %40 Binding 1
               OpDecorate %47 ArrayStride 16
               OpMemberDecorate %48 0 Offset 0
               OpDecorate %48 Block
               OpDecorate %50 DescriptorSet 0
               OpDecorate %50 Binding 0
               OpDecorate %59 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %2 %7
         %12 = OpTypeInt 32 1
         %13 = OpTypePointer Private %12
         %14 = OpVariable %13 Private
         %15 = OpConstant %12 0
         %16 = OpTypePointer Function %12
         %18 = OpConstant %12 1
         %25 = OpTypeBool
         %28 = OpConstant %12 10
         %35 = OpTypeInt 32 0
         %36 = OpConstant %35 1
         %37 = OpTypeArray %6 %36
         %38 = OpTypeStruct %37
         %39 = OpTypePointer Uniform %38
         %40 = OpVariable %39 Uniform
         %42 = OpTypePointer Uniform %6
         %47 = OpTypeArray %12 %36
         %48 = OpTypeStruct %47
         %49 = OpTypePointer Uniform %48
         %50 = OpVariable %49 Uniform
         %51 = OpTypePointer Uniform %12
         %57 = OpTypeVector %6 4
         %58 = OpTypePointer Output %57
         %59 = OpVariable %58 Output
         %60 = OpConstant %6 1
         %61 = OpConstant %6 0
         %62 = OpConstantComposite %57 %60 %61 %61 %60
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %41 = OpVariable %7 Function
               OpStore %14 %15
         %43 = OpAccessChain %42 %40 %15 %15
         %44 = OpLoad %6 %43
               OpStore %41 %44
         %45 = OpFunctionCall %2 %10 %41
         %46 = OpLoad %12 %14
         %52 = OpAccessChain %51 %50 %15 %15
         %53 = OpLoad %12 %52
         %54 = OpIEqual %25 %46 %53
               OpSelectionMerge %56 None
               OpBranchConditional %54 %55 %56
         %55 = OpLabel
               OpStore %59 %62
               OpBranch %56
         %56 = OpLabel
               OpReturn
               OpFunctionEnd
         %10 = OpFunction %2 None %8
          %9 = OpFunctionParameter %7
         %11 = OpLabel
         %17 = OpVariable %16 Function
               OpStore %17 %18
               OpBranch %19
         %19 = OpLabel
               OpLoopMerge %21 %22 None
               OpBranch %23
         %23 = OpLabel
         %24 = OpLoad %12 %17
         %26 = OpSGreaterThan %25 %24 %15
         %27 = OpLoad %12 %14
         %29 = OpSLessThan %25 %27 %28
         %30 = OpLogicalAnd %25 %26 %29
               OpBranchConditional %30 %20 %21
         %20 = OpLabel
         %31 = OpLoad %12 %14
         %32 = OpIAdd %12 %31 %18
               OpStore %14 %32
               OpBranch %22
         %22 = OpLabel
         %33 = OpLoad %12 %17
         %34 = OpISub %12 %33 %18
               OpStore %17 %34
               OpBranch %19
         %21 = OpLabel
               OpReturn
               OpFunctionEnd
