; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 52
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %20
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %20 "gl_FragCoord"
               OpDecorate %20 BuiltIn FragCoord
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %15 = OpConstant %6 1
         %17 = OpTypeFloat 32
         %18 = OpTypeVector %17 4
         %19 = OpTypePointer Input %18
         %20 = OpVariable %19 Input
         %21 = OpTypeInt 32 0
         %22 = OpConstant %21 1
         %23 = OpTypePointer Input %17
         %26 = OpConstant %17 0
         %27 = OpTypeBool
         %30 = OpConstant %6 100
         %39 = OpConstantTrue %27
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpStore %8 %9
               OpBranch %10
         %10 = OpLabel
               OpLoopMerge %12 %13 None
               OpBranch %11
         %11 = OpLabel
         %14 = OpLoad %6 %8
         %16 = OpIAdd %6 %14 %15
               OpStore %8 %16
               OpBranch %13
         %13 = OpLabel
         %24 = OpAccessChain %23 %20 %22
         %25 = OpLoad %17 %24
         %28 = OpFOrdLessThan %27 %25 %26
         %29 = OpLoad %6 %8
         %31 = OpSLessThan %27 %29 %30
         %32 = OpLogicalAnd %27 %28 %31
               OpBranchConditional %32 %10 %12
         %12 = OpLabel
               OpBranch %33
         %33 = OpLabel
               OpLoopMerge %35 %36 None
               OpBranch %34
         %34 = OpLabel
         %37 = OpLoad %6 %8
         %38 = OpIAdd %6 %37 %15
               OpStore %8 %38
               OpSelectionMerge %41 None
               OpBranchConditional %39 %40 %41
         %40 = OpLabel
               OpKill
         %41 = OpLabel
         %43 = OpAccessChain %23 %20 %22
         %44 = OpLoad %17 %43
         %45 = OpFOrdLessThan %27 %44 %26
               OpSelectionMerge %47 None
               OpBranchConditional %45 %46 %47
         %46 = OpLabel
               OpReturn
         %47 = OpLabel
               OpBranch %36
         %36 = OpLabel
         %49 = OpLoad %6 %8
         %50 = OpSLessThan %27 %49 %30
         %51 = OpLogicalAnd %27 %39 %50
               OpBranchConditional %51 %33 %35
         %35 = OpLabel
               OpReturn
               OpFunctionEnd
